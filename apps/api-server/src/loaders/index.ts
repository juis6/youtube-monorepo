import expressLoader from "./express.ts";
import type { Application } from "express";

export default async ({ app }: { app: Application }) => {
  await expressLoader({ app });
  console.log("Express Initialized");
};
