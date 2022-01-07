import express from "express";
import http from "http";

import type { Application, Request, Response } from "express";
import type { Server } from "http";
import morganMiddleware from "./logger/morgan.middleware";

export default class App {
  public express: Application;
  public httpServer: Server;

  public async init(): Promise<void> {
    this.express = express();
    this.httpServer = http.createServer(this.express);
    this.middleware();
    this.routes();
  }

  private routes(): void {
    this.express.get("/", this.baseRoute);
  }

  private baseRoute(_req: Request, res: Response): void {
    res.json({ message: "Hello World" });
  }

  private middleware(): void {
    this.express.use(morganMiddleware);
  }
}
