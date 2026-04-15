
class RideNotFoundError extends Error {
    constructor(){
        super("Ride not found");
        this.errorCode=404;
    }
}

class RideBodyNotCorrectError extends Error {
    constructor(message){
        super("Ride body not correct: "+message);
        this.errorCode = 400;
    }
}



export {
    RideNotFoundError,
    RideBodyNotCorrectError
}