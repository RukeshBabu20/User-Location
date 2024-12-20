import mongoose from "mongoose";
const DB_URI = "mongodb://127.0.0.1:27017/location";

const dbConnnection = () => {
  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("DB Connected.");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default dbConnnection;
