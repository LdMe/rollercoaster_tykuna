import {Router} from "express";
import rideViewController from "../../controllers/view/rideViewController.js";
import { checkRideBody,checkUpdateRideBody } from "../../middlewares/rideMiddleware.js";
const router = Router();

router.get("/",rideViewController.getAllRides);
router.get("/create",rideViewController.createRideForm);
router.get("/:id/edit",rideViewController.updateRideForm);
router.get("/:id",rideViewController.getRideById)

router.post("/",checkRideBody,rideViewController.createRide)

// router.put("/:id",checkUpdateRideBody,rideViewController.updateRide)
router.post("/:id/edit",checkUpdateRideBody,rideViewController.updateRide)

router.patch("/:id/status",rideViewController.setStatus);

router.delete("/:id",rideViewController.deleteRide)

export default router;