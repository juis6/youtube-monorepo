import express from "express";
import morgan from "morgan";
import routes from "../api/index.ts";
import type { Application } from "express";
import { error } from "node:console";

export default async ({ app }: { app: Application }) => {
  app.use(morgan("dev"));
  app.use(routes);
  app.use((req, res) => {
    res.status(404).json({ statusCode: 404, error: "Not Found" });
  });

  return app;
};
