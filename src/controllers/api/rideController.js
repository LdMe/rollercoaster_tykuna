import {RideCategoryModel, RideModel} from "../../models/index.js";
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
async function getAllRides(req, res) {
    const rides = await RideModel.findAll({
        include:{
            model:RideCategoryModel,
            as:"category",
            attributes:["id","name"]
        }
    });
    res.json(rides);
}

async function getRideById(req, res) {
    const id = getParsedId(req.params.id);
    const ride = await RideModel.findByPk(id);
    res.json(ride);
}

async function createRide(req, res) {
    const newRide = await RideModel.create(req.ride);
    console.log("newRide",newRide)
    res.json(newRide);
}

async function updateRide(req, res) {
    const id = getParsedId(req.params.id)

    console.log("ride",req.ride)
    const updatedRide = await RideModel.update(req.ride,{where:{id:id}});
    const ride = await RideModel.findByPk(id);

    res.json(ride)
}

async function deleteRide(req, res) {
    const id = getParsedId(req.params.id)
    const deletedRide = await RideModel.destroy({where:{id:id}});
    res.json(deletedRide);
}

async function setStatus(req, res) {
    const status = req.body.status;
    const id = getParsedId(req.params.id);
    const updatedRide = await RideModel.update( { status },{where:{id:id}});
    const ride = await RideModel.findByPk(id);

    res.json(ride)
}

export const functions = {
    getAllRides,
    getRideById,
    createRide,
    updateRide,
    setStatus,
    deleteRide
}

export default functions;