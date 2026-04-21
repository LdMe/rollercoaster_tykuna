import {Router} from "express";
import rideViewController from "../../controllers/view/rideViewController.js";
import { checkRideBody,checkUpdateRideBody } from "../../middlewares/rideMiddleware.js";
import { isLoggedIn,requireRole } from "../../middlewares/authMiddleware.js";
const router = Router();

router.use(isLoggedIn);

router.get("/",rideViewController.getAllRides);

router.get("/create",requireRole("admin"),rideViewController.createRideForm);
router.get("/:id/edit",requireRole("admin"),rideViewController.updateRideForm);
router.get("/:id",rideViewController.getRideById)

router.post("/",checkRideBody,requireRole("admin"),rideViewController.createRide)

router.post("/:id/delete",requireRole("admin"),rideViewController.deleteRide);

// router.put("/:id",checkUpdateRideBody,rideViewController.updateRide)
router.post("/:id/edit",checkUpdateRideBody,requireRole("admin"),rideViewController.updateRide)



export default router;