import { RideBodyNotCorrectError } from "../utils/errors/rideErrors.js";

function checkRideBody(req,res,next){
    const {categoryId,name,creationDate,durationSeconds,minAge,minHeightCm,status} = req.body;
    const errors = [];
    if(!categoryId){
        errors.push("categoryId not found");
    }
    if(!name){
        errors.push("name not found");
    }
    if(!status){
        errors.push("status not found");
    }
    if(! ["open","closed","testing"].includes(status)){
        errors.push("status must be 'open', 'closed' or 'testing'")
    }

    if(!errors.length){
        req.ride = {
            categoryId,name,creationDate,durationSeconds,minAge,minHeightCm,status
        }
        return next();
    }
    // throw new RideBodyNotCorrectError(errors.join(", "))
    res.status(400).json({error:errors.join(", ")});
}

export {
    checkRideBody
}