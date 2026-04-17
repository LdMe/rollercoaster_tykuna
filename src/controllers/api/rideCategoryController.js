import {RideCategoryModel,RideModel} from "../../models/index.js";
import { IDNotNumberError } from "../../utils/errors/genericErrors.js";

/**
 * helper para convertir id en numerico
 */
function getParsedId(id) {
    const idNum = parseInt(id);
    if (!idNum || isNaN(idNum)) {
        throw new IDNotNumberError();
    }
    return idNum;
}
async function getAllRideCategories(req, res) {
    const rideCategories = await RideCategoryModel.findAll({
        include:{
            model:RideModel,
            as: "rides",
            attributes:["id","name"]
        }
    });
    res.json(rideCategories);
}

async function getRideCategoryById(req, res) {
    const id = getParsedId(req.params.id);
    const ride = await RideCategoryModel.findByPk(id);
    res.json(ride);
}

async function createRideCategory(req, res) {
    const newRideCategory = await RideCategoryModel.create(req.body);
    console.log("newRideCategory",newRideCategory)
    res.json(newRideCategory);
}

async function updateRideCategory(req, res) {
    const id = getParsedId(req.params.id)

    const updatedRide = await RideCategoryModel.update(req.body,{where:{id:id}});
    const rideCategory = await RideCategoryModel.findByPk(id);

    res.json(rideCategory)
}

async function deleteRideCategory(req, res) {
    const id = getParsedId(req.params.id)
    const deletedRideCategory = await RideCategoryModel.destroy({where:{id:id}});
    res.json(deletedRideCategory);
}


export const functions = {
    getAllRideCategories,
    getRideCategoryById,
    createRideCategory,
    updateRideCategory,
    deleteRideCategory
}

export default functions;