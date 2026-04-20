import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import { checkDB,syncDB } from "./config/db.js";

dotenv.config();
const PORT = process.env.APP_PORT;
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static("public"))
app.set('views', './src/views')

app.set('view engine', 'pug')

app.get("/",(req,res)=>{
    res.render("index")
})
app.use("/",router);


checkDB();
// syncDB();
app.listen(PORT,()=>{
    console.log(`Servidor en marcha en puerto ${PORT}`);
})
