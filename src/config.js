import { config as dotenv } from "dotenv";
dotenv();

export const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "alery050831",
  database: process.env.DB_DATABASE || "lyn",
  port: process.env.DB_PORT || "3306"
};
