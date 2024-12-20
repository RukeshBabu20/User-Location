import { NextFunction, Request, Response } from "express";
import * as employeeService from "../services/employee-service";

export const createData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await employeeService.createService(req.body);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to create data" });
  }
};

export const showData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await employeeService.showService();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get data" });
  }
};

export const showIdData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const result = await employeeService.showIdService(id);
    console.log(result);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get data" });
  }
};

export const updateData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const result = await employeeService.updateService(id, req.body);
    if (result) {
      res.status(200).json({ message: "Data updated", result });
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update data" });
  }
};

export const deleteData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const result = await employeeService.deleteService(id);
    if (result) {
      res.status(200).json({ message: "data deleted", result });
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete data" });
  }
};
