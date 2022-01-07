import App from "./app";

import type { Server } from "http";
import type { AddressInfo } from "net";
import Environment from "./environments/environment";
import { setGlobalEnvironment } from "./global";

import { logger } from "./logger";

const env: Environment = new Environment();
setGlobalEnvironment(env);
const app: App = new App();
let server: Server;

const serverError = (error: NodeJS.ErrnoException) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  // handle specific error codes here.
  throw error;
};

const serverListening = () => {
  const addressInfo: AddressInfo = <AddressInfo>server.address();
  logger.info(`Server is listening on: http://localhost:${addressInfo.port}`);
};

app
  .init()
  .then(() => {
    app.express.set("port", environment.port);
    server = app.httpServer;
    server.on("error", serverError);
    server.on("listening", serverListening);
    server.listen(environment.port);
  })
  .catch((err: Error) => {
    console.log("Server failed to start: ", err);
  });

process.on("unhandledRejection", (reason: Error) => {
  console.log("Reason message: ", reason.message);
  console.log("Reason stack: ", reason.stack);
});
