import {Router} from "express";
import rideViewRouter from "./rideViewRouter.js";
const router = Router();

router.use("/rides",rideViewRouter);

export default router;