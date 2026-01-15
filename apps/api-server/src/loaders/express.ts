import express from "express";
import morgan from "morgan";
import type { Application } from "express";

export default async ({ app }: { app: Application }) => {
  app.use(morgan("dev"));
  return app;
};
