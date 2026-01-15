import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).json({ statusCode: 200, url: req.url });
  } catch (err) {
    res.status(500).json({ statusCode: 200, error: err });
  }
});

export default router;
