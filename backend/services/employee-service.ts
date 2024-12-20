import employeeModel from "../models/employee-model";
import { employeeType } from "../interface/types";

export const createService = async (data: employeeType) => {
  return await employeeModel.create(data);
};

export const showService = async () => {
  return await employeeModel.find();
};

export const showIdService = async (id: string) => {
  return await employeeModel.findById(id);
};

export const updateService = async (id: string, data: employeeType) => {
  return await employeeModel.findByIdAndUpdate(id, data);
};

export const deleteService = async (id: string) => {
  return await employeeModel.findByIdAndDelete(id);
};
