
class IDNotNumberError extends Error{
    constructor(){
        super("ID is not a number");
        this.errorCode = 400;
    }
}

export {
    IDNotNumberError
}