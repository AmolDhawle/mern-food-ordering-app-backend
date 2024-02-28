import express from "express";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyUserRequest } from "../middlewares/validation";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, MyUserController.updateCurrentUser);
router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);

export default router;