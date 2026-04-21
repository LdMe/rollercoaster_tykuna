import {UserModel} from "../models/index.js";

async function getAllUsers() {
    const users = await UserModel.findAll();
    return users;
}

async function getUserByEmail(email){
    const user = await UserModel.findOne({where:{email}});
    return user;
}

async function getUserById(id){
    const user = await UserModel.findByPk(id);
    return user;
}

async function createUser(data){
    const newUser = await UserModel.create(data);
    return newUser;
}

export const functions = {
    getAllUsers,
    getUserById,
    createUser,
    getUserByEmail
}

export default functions;