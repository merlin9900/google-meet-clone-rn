import axios, {
  AxiosRequestConfig,
  type Axios,
  type AxiosError,
  type AxiosResponse,
  type CreateAxiosDefaults,
} from "axios";
import { Function } from "../types";
import { getTokens } from "../utils";
import { ENV } from "./env";

type Headers = CreateAxiosDefaults["headers"];
const baseHeaders: Headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

interface AxiosConfigProps {
  headers?: Headers;
  prefix?: `/${string}`;
  allowMultipleInterceptors?: boolean;
  onRequest?: Function<AxiosRequestConfig, AxiosRequestConfig>;
  onResponse?: Function<AxiosResponse>;
  onError?: Function<AxiosError>;
}

export class AxiosConfig {
  private readonly axiosInstance: Axios;
  private requestInterceptor: number | null = null;
  private responseInterceptor: number | null = null;
  private readonly allowMultipleInterceptors: boolean = false;

  private createInstance({
    headers = {},
    prefix = "/",
  }: Pick<AxiosConfigProps, "headers" | "prefix">) {
    return axios.create({
      baseURL: ENV.apiBaseUrl + (prefix ?? ""),
      headers: {
        ...baseHeaders,
        ...headers,
      },
      withCredentials: true,
      timeout: 20000,
    });
  }

  private useRequestInterceptor({
    onRequest,
  }: Pick<AxiosConfigProps, "onRequest">) {
    if (!this.allowMultipleInterceptors && this.requestInterceptor !== null) {
      this.axiosInstance.interceptors.request.eject(this.requestInterceptor);
    }

    this.requestInterceptor = this.axiosInstance.interceptors.request.use(
      async (config) => {
        const { accessToken } = await getTokens();
        config.headers.Authorization = accessToken;
        if (onRequest) onRequest(config);
        return config;
      }
    );
  }

  private useResponseInterceptor({
    onResponse,
    onError,
  }: Pick<AxiosConfigProps, "onResponse" | "onError">) {
    if (!this.allowMultipleInterceptors && this.responseInterceptor !== null)
      this.axiosInstance.interceptors.response.eject(this.responseInterceptor);

    this.responseInterceptor = this.axiosInstance.interceptors.response.use(
      (response) => {
        if (onResponse) onResponse(response);
        return response;
      },
      (error: AxiosError) => {
        if (error.status === 401) {
          // Refresh token
        }

        if (onError) onError(error);
        return Promise.reject(error);
      }
    );
  }

  constructor({
    allowMultipleInterceptors = false,
    headers,
    prefix,
    onRequest,
    onResponse,
    onError,
  }: AxiosConfigProps = {}) {
    this.allowMultipleInterceptors = allowMultipleInterceptors;
    this.axiosInstance = this.createInstance({ headers, prefix });
    if (onRequest) {
      this.useRequestInterceptor({ onRequest });
    }
    if (onResponse || onError)
      this.useResponseInterceptor({ onResponse, onError });
  }

  get() {
    return this.axiosInstance;
  }

  clearAllInterceptors() {
    this.axiosInstance.interceptors.request.clear();
    this.requestInterceptor = null;

    this.axiosInstance.interceptors.response.clear();
    this.responseInterceptor = null;
  }
}
