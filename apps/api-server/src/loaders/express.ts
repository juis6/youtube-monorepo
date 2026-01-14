import express, { Application } from "express";
import morgan from "morgan";

export default async ({ app }: { app: Application }) => {
  app.use(morgan("dev"));
  return app;
};
