import {RideCategoryModel, RideModel} from "../models/index.js";

async function getAllRideCategories() {
    const rides = await RideCategoryModel.findAll();
    return rides;
}

// async function getRideById(id) {
//     const ride = await RideModel.findByPk(id);
//     return ride;
// }

// async function createRide(rideData) {
//     const newRide = await RideModel.create(rideData);
//     return newRide;
// }

// async function updateRide(id,rideData) {

//     const updatedRide = await RideModel.update(rideData,{where:{id:id}});
//     const ride = await RideModel.findByPk(id);
//     return ride;
// }

// async function deleteRide(id) {
//     const deletedRide = await RideModel.destroy({where:{id:id}});
//     return deletedRide;
// }

// async function setStatus(id,status) {
//     const updatedRide = await RideModel.update( { status },{where:{id:id}});
//     const ride = await RideModel.findByPk(id);
//     return ride;
// }

export const functions = {
    getAllRideCategories,
    // getRideById,
    // createRide,
    // updateRide,
    // setStatus,
    // deleteRide
}

export default functions;