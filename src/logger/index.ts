import winston from "winston";
import { ConsoleTransportInstance, FileTransportInstance } from "winston/lib/winston/transports";
import path from "path";
import { __prod__ } from "../utils";

interface LoggerTypes {
  error: (message: string, e?: Error) => void;
  warn: (message: string, e?: Error) => void;
  info: (message: string, e?: Error) => void;
  http: (message: string, e?: Error) => void;
  debug: (message: string, e?: Error) => void;
}

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// if the server was run in development mode; otherwise,
// In production, show only warn and error messages.
const level = () => {
  const env = process.env.NODE_ENV || "local" || "dev";
  const isDevelopment = env === "local" || "dev";
  return isDevelopment ? "debug" : "warn";
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "white",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

const format = winston.format.combine(
  // winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.timestamp({ format: "HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

const logPath = path.join(__dirname, "../logs");

const transports: [FileTransportInstance, FileTransportInstance] | [ConsoleTransportInstance] =
  __prod__
    ? [
        new winston.transports.File({
          filename: `${logPath}/error.log`,
          level: "error",
        }),
        new winston.transports.File({ filename: `${logPath}/all.log` }),
      ]
    : [new winston.transports.Console()];

export const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
}) as unknown as LoggerTypes;
