import {Router} from "express";
import rideRouter from "./rideRouter.js";
import rideCategoryRouter from "./rideCategoryRouter.js";
import authRouter from "./authRouter.js";
const router = Router();

router.use("/auth",authRouter);
router.use("/rides",rideRouter);
router.use("/categories",rideCategoryRouter);
export default router;