import mongoose, { Schema } from "mongoose";
import { courseType } from "../interface/types";

const courseSchema: Schema<courseType> = new mongoose.Schema({
  class: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  board: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
});

const courseModel = mongoose.model<courseType>("course", courseSchema);
export default courseModel;
