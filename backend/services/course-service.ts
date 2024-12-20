import { courseType } from "../interface/types";
import courseModel from "../models/course-model";

export const createService = async (data: courseType) => {
  return await courseModel.create(data);
};

export const showService = async () => {
  return await courseModel.find();
};

export const showIdService = async (id: string) => {
  return await courseModel.findById(id);
};

export const updateService = async (id: string, data: courseType) => {
  return await courseModel.findByIdAndUpdate(id, data as courseType);
};

export const deleteService = async (id: string) => {
  return await courseModel.findByIdAndDelete(id);
};
