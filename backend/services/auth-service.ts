import authModel from "../models/auth-model";
import bcrypt from "bcryptjs";
import { authType } from "../interface/types";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  profileImage: string,
  latitude: string,
  longitude: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: authType = {
    name,
    email,
    password: hashedPassword,
    profileImage,
    latitude,
    longitude,
  };
  console.log(newUser);

  return await authModel.create(newUser);
};

export const findUser = async (email: string) => {
  const user = await authModel.findOne({ email });
  return user;
};

export const deleteUser = async (email: string) => {
  return await authModel.deleteOne({ email });
};
