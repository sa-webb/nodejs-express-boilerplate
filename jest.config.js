/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  preset: "ts-jest",
  roots: ["./tests"],
  testEnvironment: "node",
  setupFiles: ["dotenv/config"],
  globals: {
    "ts-jest": {
      // ignore WARN triggered by !tsconfig.json
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
};
