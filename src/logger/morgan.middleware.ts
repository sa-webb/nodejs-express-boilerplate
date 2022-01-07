import morgan, { StreamOptions } from "morgan";
import { __prod__ } from "../utils";
import { logger } from "./index";

const stream: StreamOptions = {
  write: (message: string) => logger.http(message),
};

const skip = () => {
  return __prod__;
};

const morganMiddleware = morgan(":method :url :status :res[content-length] - :response-time ms", {
  stream,
  skip,
});

export default morganMiddleware;
