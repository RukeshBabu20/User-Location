import { NextFunction, Request, Response } from "express";
import * as authService from "../services/auth-service";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.util";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password, latitude, longitude } = req.body;
  const profileImage = `/uploads/${req?.file?.filename}`;

  try {
    await authService.registerUser(
      name,
      email,
      password,
      profileImage,
      latitude,
      longitude
    );

    res.status(200).json({ message: "User created successfuly" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user", error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await authService.findUser(email);
    console.log(user);
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        res.status(401).json({ message: "Invalid Password" });
      }

      const token = generateToken({ email });
      res.status(200).json({ message: "Login successful", token });
    } else {
      res.status(401).json({ message: "User not found!" });
    }
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  try {
    const user = await authService.findUser(email);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    await authService.deleteUser(email);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user" });
  }
};
