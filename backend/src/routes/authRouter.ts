import express, { Request, Response } from "express";
import {
  login,
  register,
  logout,
  profile,
} from "../controllers/authController";

const router = express.Router();

router.post("/login", (req: Request, res: Response) => {
  login(req, res);
});

router.post("/register", (req: Request, res: Response) => {
  register(req, res);
});

router.post("/logout", (req: Request, res: Response) => {
  logout(req, res);
});

router.post("/profile", (req: Request, res: Response) => {
  profile(req, res);
});

export default router;
