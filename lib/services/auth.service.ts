import { AxiosError, AxiosResponse } from "axios";
import { AxiosConfig } from "../config/axios";
import { LoginInput } from "../schema/auth.schema";

export class AuthService {
  private static handleResponse(response: AxiosResponse): void {
    console.log(`Received response from ${response.config.url}`);
    console.log("Response data:", response.data);
  }

  private static handleError(error: AxiosError): void {
    console.log("Error during API call", error.message);
    if (error.response?.status === 401) {
      console.log("Unauthorized! Token may need to be refreshed.");
    }
    throw error.response?.data;
  }

  private static readonly client = new AxiosConfig({
    onResponse: AuthService.handleResponse,
    onError: AuthService.handleError,
  }).get();

  static async login(payload: LoginInput) {
    const response = await this.client.post("/api/auth/login/", payload);
    return response.data;
  }
}
