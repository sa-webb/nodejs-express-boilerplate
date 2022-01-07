import App from "../src/app";

import express from "express";
import Environment from "../src/environments/environment";
import { setGlobalEnvironment } from "../src/global";

export default class InitializeApp {
  public static appInstance: express.Application;

  public static async bootstrapApp(): Promise<express.Application> {
    if (this.appInstance) {
      return this.appInstance;
    }
    const env: Environment = new Environment();
    setGlobalEnvironment(env);
    const app: App = new App();
    await app.init();
    this.appInstance = app.express;

    return this.appInstance;
  }
}
