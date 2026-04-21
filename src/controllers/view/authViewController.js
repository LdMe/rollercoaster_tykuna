import userService from "../../services/userService.js";
import { parseViewError } from "../../utils/functions.js";
async function loginForm(req,res){
    const message = req.query.message
    res.render("auth/login",{message});
}

async function registerForm(req,res){
    const message = req.query.message
    res.render("auth/register",{message});
}

async function register(req,res){
    try{
        const data = req.registerData;
        console.log(data);
        const newUser = await userService.createUser(data);
        res.redirect("/auth/login?message=usuario creado con exito")
    }catch(error){
         parseViewError(error, res);
    }
}

async function login(req,res){
    res.redirect("/rides")
}

async function logout(req,res){
    req.session.destroy();
    res.redirect("/login")
}


export const functions = {
    loginForm,
    registerForm,
    register,
    login,
    logout
}

export default functions;

