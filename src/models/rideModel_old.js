import { rides } from "../data/data.js";
import { RideNotFoundError } from "../utils/errors/rideErrors.js";
function getAllRides(){
    return rides;
}

function getRideById(id){
    return rides.find(r => r.id === id);
}

function createRide(data){
    const maxId = Math.max(...rides.map(r=>r.id))
    data.id= maxId+1;
    rides.push(data);
    return data;
}

function updateRide(id,data){
    const ride = getRideById(id);
    if(!ride){
        throw new RideNotFoundError();
    }
    const updatedRide = {...ride,...data};
    const index = rides.findIndex(r=>r.id===id);
    rides[index] = updatedRide;
    return updatedRide;
}

function deleteRide(id){
    const index = rides.findIndex(r=>r.id===id);
    if(index === -1){
         throw new RideNotFoundError();
    }
    const deletedRide = rides[index];
    rides.splice(index,1);
    return deletedRide

}

export const functions = {
    getAllRides,
    getRideById,
    createRide,
    updateRide,
    deleteRide
}
export default functions;