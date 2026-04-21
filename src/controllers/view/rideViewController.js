
import rideService from "../../services/rideService.js";
import { getParsedId, parseViewError } from "../../utils/functions.js";
import rideCategoryService from "../../services/rideCategoryService.js";

async function getAllRides(req, res) {
    try {
        const rides = await rideService.getAllRides();
        res.render("rides/list", { rides });
    } catch (error) {
        parseViewError(error, res);
    }
}

async function getRideById(req, res) {
    try {
        const id = getParsedId(req.params.id);
        const message = req.query.message;
        const ride = await rideService.getRideById(id);
        res.render("rides/details", { ride, message });
    } catch (error) {
        parseViewError(error, res);
    }
}

async function createRide(req, res) {
    try {
        const ride = await rideService.createRide(req.ride);
        res.redirect("/rides/" + ride.id + "?message=exito al crear atracción");
    } catch (error) {
        parseViewError(error, res);
    }
}


async function createRideForm(req, res) {
    try {
        const categories = await rideCategoryService.getAllRideCategories();
        res.render("rides/create", { categories });
    } catch (error) {
        parseViewError(error, res);
    }
}

async function updateRideForm(req, res) {
    try {
        const id = getParsedId(req.params.id);

        const categories = await rideCategoryService.getAllRideCategories();
        const ride = await rideService.getRideById(id);
        res.render("rides/edit", { ride, categories });
    } catch (error) {
        parseViewError(error, res);
    }
}

async function updateRide(req, res) {
    try {
        const id = getParsedId(req.params.id);
        const ride = await rideService.updateRide(id, req.ride);
        res.redirect("/rides/" + ride.id);
    } catch (error) {
        parseViewError(error, res);
    }

}

async function deleteRide(req, res) {
    try {
        const id = getParsedId(req.params.id);
        const ride = await rideService.deleteRide(id);
        res.redirect("/rides")
    } catch (error) {
        parseViewError(error, res);
    }

}

async function setStatus(req, res) {
    try {
        const id = getParsedId(req.params.id);
        const ride = await rideService.setStatus(id, req.body.status);
        res.json(ride);
    } catch (error) {
        parseViewError(error, res);
    }
}

export const functions = {
    getAllRides,
    getRideById,
    createRide,
    updateRide,
    setStatus,
    deleteRide,
    createRideForm,
    updateRideForm
}

export default functions;