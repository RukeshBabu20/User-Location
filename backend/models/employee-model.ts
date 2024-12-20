import mongoose, { Schema, trusted } from "mongoose";
import { employeeType } from "../interface/types";

const employeeSchema: Schema<employeeType> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  department: {
    type: String,
    required: true,
    maxlength: 15,
  },
  salary: {
    type: Number,
    maxlength: 15,
    required: true,
  },
});

const employeeModel = mongoose.model<employeeType>("employee", employeeSchema);
export default employeeModel;
