import App from "../src/app";

import express from "express";

export default class InitializeApp {
  public static appInstance: express.Application;

  public static async bootstrapApp(): Promise<express.Application> {
    if (this.appInstance) {
      return this.appInstance;
    }
    const app: App = new App();
    await app.init();
    this.appInstance = app.express;

    return this.appInstance;
  }
}
