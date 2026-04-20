
import rideService from "../../services/rideService.js";
import { getParsedId,parseViewError } from "../../utils/functions.js";


async function getAllRides(req, res) {
    try {
        const rides = await rideService.getAllRides();
        res.render("rides/list",{rides});
    } catch (error) {
        parseViewError(error,res);
    }
}

async function getRideById(req, res) {
    try {
    const id = getParsedId(req.params.id);
    const ride = await rideService.getRideById(id);
    res.render("rides/details",{ride});
    } catch (error) {
        parseViewError(error,res);
    }
}

async function createRide(req, res) {
     try {

    const ride = await rideService.createRide(req.ride);
    res.json(ride);
    } catch (error) {
        parseViewError(error,res);
    }
}

async function updateRide(req, res) {
     try {
    const id = getParsedId(req.params.id);
    const ride = await rideService.updateRide(id,req.ride);
    res.json(ride);
    } catch (error) {
        parseViewError(error,res);
    }
    
}

async function deleteRide(req, res) {
     try {
    const id = getParsedId(req.params.id);
    const ride = await rideService.deleteRide(id);
    res.json(ride);
    } catch (error) {
        parseViewError(error,res);
    }
    
}

async function setStatus(req, res) {
     try {
    const id = getParsedId(req.params.id);
    const ride = await rideService.setStatus(id,req.body.status);
    res.json(ride);
    } catch (error) {
        parseViewError(error,res);
    }
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