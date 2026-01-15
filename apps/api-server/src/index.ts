import express from "express";
import dotenv from "./config/index.ts";
import load from "./loaders/index.ts";

const PORT = parseInt(dotenv.port || "3000");

async function shutdown() {
  process.exit(0);
}

async function startServer() {
  const app = express();

  await load({ app });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

startServer();
