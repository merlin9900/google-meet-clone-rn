interface Environments {
  apiBaseUrl: string;
}

const environments: Environments = {
  apiBaseUrl: process.env.EXPO_PUBLIC_API_URL ?? "",
};

const getEnv = () => {
  return environments;
};

export const ENV = getEnv();
