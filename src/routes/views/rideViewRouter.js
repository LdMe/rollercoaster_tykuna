import {Router} from "express";
import rideViewController from "../../controllers/view/rideViewController.js";
import { checkRideBody,checkUpdateRideBody } from "../../middlewares/rideMiddleware.js";
import { isLoggedIn,requireAdmin,requireRole } from "../../middlewares/authMiddleware.js";
const router = Router();

router.use(isLoggedIn);

router.get("/",rideViewController.getAllRides);

router.get("/create",requireAdmin,rideViewController.createRideForm);
router.get("/:id/edit",requireAdmin,rideViewController.updateRideForm);
router.get("/:id",rideViewController.getRideById)

router.post("/",checkRideBody,requireAdmin,rideViewController.createRide)

router.post("/:id/delete",requireAdmin,rideViewController.deleteRide);

// router.put("/:id",checkUpdateRideBody,rideViewController.updateRide)
router.post("/:id/edit",checkUpdateRideBody,requireAdmin,rideViewController.updateRide)



export default router;