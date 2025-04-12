import type { CreateClientConfig } from "~/openapi-client/client.gen";
import { config } from "dotenv";

config({ path: ".env" });

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: process.env.REACT_APP_API_BASE_URL,
});