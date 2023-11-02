import dotenv from "dotenv";
dotenv.config();
import { development } from "./development";
import { production } from "./production";

const environment = process.env.NODE_ENV;

let config: any;

if (!environment) throw new Error("No environment setup");

// Logging to the console to indicate the environment
console.log(`server setup to ${environment}!!!👨‍💻`);

if (environment.trim() === "development") {
  config = {...development};
} else {
    config = {...production};
}

export { config };