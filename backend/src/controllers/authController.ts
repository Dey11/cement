import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel";
import { Request, Response } from "express";
import { IUser } from "../types/user";
import { error } from "console";

dotenv.config();

const secret = process.env.SECRET as string;
const salt = bcrypt.genSaltSync(10);

export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser: IUser = {
      email,
      password: hashedPassword,
      name,
    };

    await userModel.create(newUser);
    res.status(200).json({ message: "User has been created successfully" });
  } catch (err) {
    res.status(400).json({ message: `Error: ${err}` });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const userInDb = await userModel.findOne({ email });
    if (!userInDb) {
      throw error;
      res.status(400).json({ message: "User does not exist in DB." });
    }
    const isPasswordCorrect = bcrypt.compareSync(password, userInDb!.password);
    if (!isPasswordCorrect) {
      throw error;
      res.status(400).json({ message: "Incorrect password." });
    }

    const newToken = jwt.sign(
      { email, password: userInDb!.password, name: userInDb?.name },
      secret
    );
    res.status(200).json({
      message: "User has logged in successfully.",
      email,
      name: userInDb?.name,
      newToken,
    });
  } catch (err) {
    res.status(400).json({ message: `Error: ${err}` });
  }
};

export const logout = async (req: Request, res: Response) => {
  res.status(200).json({ message: "User has been logged out successfully." });
};

export const profile = async (req: Request, res: Response) => {
  const { token } = req.body;
  try {
    if (!token) {
      throw error;
      res.status(400).json({ message: "Token not found." });
    }
    const decode = jwt.verify(token, secret);
    res.status(200).json({ message: "User is logged in.", decode });
  } catch (err) {
    res.status(400).json({ message: `Error: ${err}` });
  }
};
