import morgan, { StreamOptions } from "morgan";
import { logger } from "./index";

const stream: StreamOptions = {
  write: (message: string) => logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV;
  return env !== "production";
};

const MorganMiddleware = morgan(":method :url :status :res[content-length] - :response-time ms", {
  stream,
  skip,
});

export default MorganMiddleware;
