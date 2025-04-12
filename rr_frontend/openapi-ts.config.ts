import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts';
import { config } from "dotenv";

config({ path: ".env" });

const openapiFile = process.env.OPENAPI_INPUT_FILE;

export default defineConfig({
  input: openapiFile as string,
  output: {
    format: "prettier",
    lint: "eslint",
    path: "app/openapi-client",
  },
  plugins: [
    ...defaultPlugins,
    {
      name: '@hey-api/client-fetch',
      runtimeConfigPath: './app/lib/clientConfig.ts',
    },
    {
      enums: 'javascript',
      name: '@hey-api/typescript',
    },
  ], 
});