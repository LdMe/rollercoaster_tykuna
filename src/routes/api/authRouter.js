import {Router} from "express";
import authApiController from "../../controllers/api/authApicontroller.js";
import { isRegisterDataCorrect,checkCredentials } from "../../middlewares/authMiddleware.js";

const router = Router();

router.post("/register",isRegisterDataCorrect,authApiController.register);

router.post("/login",checkCredentials,authApiController.login);

export default router;