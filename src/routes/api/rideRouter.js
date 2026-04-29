import {Router} from "express";
import rideController from "../../controllers/api/rideController.js";
import { checkRideBody,checkUpdateRideBody } from "../../middlewares/rideMiddleware.js";
import{ verifyToken,requireRoleApi } from "../../middlewares/authMiddleware.js";
const router = Router();
router.use(verifyToken);


router.get("/",rideController.getAllRides);

router.get("/:id",requireRoleApi("admin"),rideController.getRideById)

router.post("/",checkRideBody,rideController.createRide)

router.put("/:id",checkUpdateRideBody,rideController.updateRide)

router.patch("/:id/status",rideController.setStatus);

router.delete("/:id",rideController.deleteRide)

export default router;