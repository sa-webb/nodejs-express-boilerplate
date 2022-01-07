enum Environments {
  DEV = "dev",
  LOCAL = "local",
  PRODUCTION = "production",
  TEST = "test",
}

enum EnvironmentFile {
  DEV = ".env",
  LOCAL = ".env.local",
  PRODUCTION = ".env.prod",
  TEST = ".env.test",
}

export { Environments, EnvironmentFile };
