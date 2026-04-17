import {Router} from "express";
import rideRouter from "./rideRouter.js";
import rideCategoryRouter from "./rideCategoryRouter.js";

const router = Router();

router.use("/rides",rideRouter);
router.use("/categories",rideCategoryRouter);
export default router;