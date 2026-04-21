import {Router} from "express";
import authViewController from "../../controllers/view/authViewController.js"
import { isRegisterDataCorrect,checkCredentials } from "../../middlewares/authMiddleware.js";

const router = Router();

router.get("/login",authViewController.loginForm)
router.get("/register",authViewController.registerForm)

router.post("/register",isRegisterDataCorrect,authViewController.register);

router.post("/login",checkCredentials,authViewController.login);
router.post("/logout",authViewController.logout);

export default router;