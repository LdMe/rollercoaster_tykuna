import { RideBodyNotCorrectError } from "../utils/errors/rideErrors.js";

function checkRideBody(req,res,next){
    const {categoryId: stringCategory,name,creationDate,durationSeconds,minAge,minHeightCm,status} = req.body;
    const errors = [];
    const categoryId = parseInt(stringCategory);
    if(!categoryId || isNaN(categoryId)){
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
function checkUpdateRideBody(req,res,next){
    const {categoryId: stringCategory,name,creationDate,durationSeconds,minAge,minHeightCm,status} = req.body;
    const errors = [];
    const categoryId = parseInt(stringCategory);
    if(stringCategory && isNaN(categoryId)){
        errors.push("categoryId not a number");
    }
    
    
    if(status && !["open","closed","testing"].includes(status)){
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
    checkRideBody,
    checkUpdateRideBody
}