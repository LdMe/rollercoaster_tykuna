import userService from "../../services/userService.js";
import { parseError } from "../../utils/functions.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function register(req,res){
    try{
        const data = req.registerData;
        console.log(data);
        const newUser = await userService.createUser(data);
        res.json(newUser);
    }catch(error){
         parseError(error, res);
    }
}

async function login(req,res){
    try{
        const user = await userService.getUserByEmail(req.body.email);
        if (!user) {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }
        const payload = {
            id: user.id,
            email: user.email,
            role: user.role,
            name:user.name
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        res.json({ token });

    }catch(error){
        parseError(error, res);
    }
}



export const functions = {
    register,
    login,
}

export default functions;

