enum Environments {
  DEV = "dev",
  LOCAL = "local",
  PRODUCTION = "production",
  TEST = "test",
}

enum EnvFile {
  DEV = ".env",
  LOCAL = ".env.local",
  PRODUCTION = ".env.prod",
  TEST = ".env.test",
}

export { Environments, EnvFile };
