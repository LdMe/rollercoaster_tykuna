import { IDNotNumberError } from "./errors/genericErrors.js";
function getParsedId(id) {
    const idNum = parseInt(id);
    if (!idNum || isNaN(idNum)) {
        throw new IDNotNumberError();
    }
    return idNum;
}
function parseViewError(error, res) {
    console.error(error);
    let status = 500;
    let errorMessage = "Error interno del servidor";
    if (error.errorCode) {
        status = error.errorCode;
        errorMessage = error.message;
    }
    res.status(status).render("error",{ error: errorMessage });
}
function parseError(error, res) {
    console.error(error);
    let status = 500;
    let errorMessage = "Error interno del servidor";
    if (error.errorCode) {
        status = error.errorCode;
        errorMessage = error.message;
    }
    res.status(status).json({ error: errorMessage });
}

export {
    getParsedId,
    parseError,
    parseViewError
}