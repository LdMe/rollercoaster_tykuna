import { RideCategoryModel, RideModel } from "../models/index.js";

async function getAllRides(filters = {}, page=1,limit=2) {

    const realPage = Math.max(page, 1);
    const realLimit = Math.max(limit,1);
    const offset = (realPage -1)*realLimit;
    const rides = await RideModel.findAndCountAll({
        where: filters,
        include: {
            model: RideCategoryModel,
            as: "category",
            attributes: ["id", "name"]
        },
        offset,
        realLimit
    });
    rides.currentPage=realPage;
    rides.totalPages = Math.ceil(rides.count / realLimit);
    rides.elementsPerPage = realLimit;
    rides.prevPage = realPage - 1;
    rides.nextPage = Math.min(realPage +1, rides.totalPages)
    return rides;
}

async function getRideById(id) {
    const ride = await RideModel.findByPk(id);
    return ride;
}

async function createRide(rideData) {
    const newRide = await RideModel.create(rideData);
    return newRide;
}

async function updateRide(id, rideData) {

    const updatedRide = await RideModel.update(rideData, { where: { id: id } });
    const ride = await RideModel.findByPk(id);
    return ride;
}

async function deleteRide(id) {
    const deletedRide = await RideModel.destroy({ where: { id: id } });
    return deletedRide;
}

async function setStatus(id, status) {
    const updatedRide = await RideModel.update({ status }, { where: { id: id } });
    const ride = await RideModel.findByPk(id);
    return ride;
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