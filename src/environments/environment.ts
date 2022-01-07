import * as fs from "fs";
import { config as configDotenv } from "dotenv";
import * as path from "path";
import { EnvFile, Environments } from "./environment.constant";
import { IEnvironment } from "./environment.interface";

class Environment implements IEnvironment {
  public port: number;

  public secretKey: string;

  constructor() {
    this.setEnvironment(process.env.NODE_ENV as string);
    this.port = Number(process.env.PORT) as number;
    this.secretKey = process.env.SECRET_KEY as string;
  }

  public getCurrentEnvironment(): string {
    let environment: string = process.env.NODE_ENV || Environments.DEV;

    if (!environment) {
      environment = Environments.LOCAL;
    }
    switch (environment) {
      case Environments.PRODUCTION:
        return Environments.PRODUCTION;
      case Environments.DEV:
        return Environments.DEV;
      case Environments.TEST:
        return Environments.TEST;
      case Environments.LOCAL:
        return Environments.LOCAL;
      default:
        return Environments.LOCAL;
    }
  }

  public setEnvironment(env: string): void {
    let envPath: string;
    const rootdir: string = path.resolve(__dirname, "../../");
    switch (env) {
      case Environments.DEV:
        envPath = path.resolve(rootdir, EnvFile.DEV);
        break;
      case Environments.LOCAL:
        envPath = path.resolve(rootdir, EnvFile.LOCAL);
        break;
      case Environments.PRODUCTION:
        envPath = path.resolve(rootdir, EnvFile.PRODUCTION);
        break;
      case Environments.TEST:
        envPath = path.resolve(rootdir, EnvFile.TEST);
        break;
      default:
        throw new Error("NODE_ENV is not set");
    }
    if (!fs.existsSync(envPath)) {
      throw new Error(".env file is missing in root directory");
    }
    configDotenv({ path: envPath });
  }

  public isProductionEnvironment(): boolean {
    return this.getCurrentEnvironment() === Environments.PRODUCTION;
  }

  public isDevEnvironment(): boolean {
    return (
      this.getCurrentEnvironment() === Environments.DEV ||
      this.getCurrentEnvironment() === Environments.LOCAL
    );
  }

  public isTestEnvironment(): boolean {
    return this.getCurrentEnvironment() === Environments.TEST;
  }
}

export default Environment;
