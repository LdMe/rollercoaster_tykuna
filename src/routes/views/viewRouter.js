import {Router} from "express";
import rideViewRouter from "./rideViewRouter.js";
import authRouter from "./authViewRouter.js";
const router = Router();
router.get("/",(req,res)=>{
    res.render("index");
})
router.use("/rides",rideViewRouter);
router.use("/auth",authRouter);

export default router;