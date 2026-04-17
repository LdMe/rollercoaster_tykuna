import {Router} from "express";
import rideController from "../../controllers/api/rideController.js";
import { checkRideBody,checkUpdateRideBody } from "../../middlewares/rideMiddleware.js";
const router = Router();

router.get("/",rideController.getAllRides);

router.get("/:id",rideController.getRideById)

router.post("/",checkRideBody,rideController.createRide)

router.put("/:id",checkUpdateRideBody,rideController.updateRide)

router.patch("/:id/status",rideController.setStatus);

router.delete("/:id",rideController.deleteRide)

export default router;