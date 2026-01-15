import { Router } from "express";
import rootRoutes from "./root.routes.ts";

const router = Router();

router.use("/", rootRoutes);

export default router;
