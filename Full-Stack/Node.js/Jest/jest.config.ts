import type { Config } from "jest";
const config: Config = {
  bail: true,
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
