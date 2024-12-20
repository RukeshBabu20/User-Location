import express from "express";
const router = express.Router();
import * as authController from "../controller/auth-controller";
import * as employeeController from "../controller/employee-controller";
import { verifyToken } from "../middleware/auth-middleware";

router.get("/show", verifyToken, employeeController.showData);
router.get("/show/:id", verifyToken, employeeController.showIdData);
router.post("/create", verifyToken, employeeController.createData);
router.put("/update/:id", verifyToken, employeeController.updateData);
router.delete("/delete/:id", verifyToken, employeeController.deleteData);

router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;
