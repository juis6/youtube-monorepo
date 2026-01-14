import { Application } from "express";
import expressLoader from "./express.js";

export default async ({ app }: { app: Application }) => {
  await expressLoader({ app });
  console.log("Express Initialized");
};
