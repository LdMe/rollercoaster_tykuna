import rideModel from "../../models/rideModel.js";
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
function getAllRides(req, res) {
    const rides = rideModel.getAllRides();
    res.json(rides);
}

function getRideById(req, res) {
    const id = getParsedId(req.params.id);
    const ride = rideModel.getRideById(id);
    res.json(ride);
}

function createRide(req, res) {
    const newRide = rideModel.createRide(req.ride);
    res.json(newRide);
}

function updateRide(req, res) {
    const id = getParsedId(req.params.id)

    const updatedRide = rideModel.updateRide(id, req.body);
    res.json(updatedRide)
}

function deleteRide(req, res) {
    const id = getParsedId(req.params.id)
    const deletedRide = rideModel.deleteRide(id);
    res.json(deletedRide);
}

function setStatus(req, res) {
    const status = req.body.status;
    const id = getParsedId(req.params.id);
    const updatedRide = rideModel.updateRide(id, { status });
    res.json(updatedRide)
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