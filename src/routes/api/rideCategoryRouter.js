import {Router} from "express";
import rideCategoryController from "../../controllers/api/rideCategoryController.js";
const router = Router();

router.get("/",rideCategoryController.getAllRideCategories);

router.get("/:id",rideCategoryController.getRideCategoryById)

router.post("/",rideCategoryController.createRideCategory)

router.put("/:id",rideCategoryController.updateRideCategory)


router.delete("/:id",rideCategoryController.deleteRideCategory)

export default router;