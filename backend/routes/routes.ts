import express from "express";
const router = express.Router();
import * as authController from "../controller/auth-controller";
import * as courseController from "../controller/course-controller";
import { verifyToken } from "../middleware/auth-middleware";
import multer from "multer";
import { uploads } from "../utils/fileUpload";

const upload = multer();

router.get("/courses", verifyToken, courseController.showData);
router.get("/courses/:id", verifyToken, courseController.showIdData);
router.post("/courses", verifyToken, courseController.createData);
router.put("/courses/:id", verifyToken, courseController.updateData);
router.delete("/courses/:id", verifyToken, courseController.deleteData);

router.post("/register", uploads, authController.register);
router.post("/users", authController.login);
router.delete("/users/:email", authController.deleteUser);
router.get("/users", verifyToken, authController.courseslist);

export default router;
