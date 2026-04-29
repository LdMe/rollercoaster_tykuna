import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import { checkDB, syncDB } from "./config/db.js";
import session from "express-session";
import { injectUserToViews } from "./middlewares/authMiddleware.js";
import YAML from "yamljs";
import swaggerUi from 'swagger-ui-express';


dotenv.config();
const PORT = process.env.APP_PORT;
const app = express();
app.use(session({
    secret: process.env.SESSION_SECRET, // clave para firmar la cookie de sesión
    resave: false,
    // no guarda la sesión si no ha cambiado
    saveUninitialized: false // no crea sesión hasta que haya datos
}))
app.use(injectUserToViews);
app.use(express.urlencoded());
app.use(express.json());
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(YAML.load("./swagger.yaml")));
app.use(express.static("public"))
app.set('views', './src/views')

app.set('view engine', 'pug')


app.use("/", router);


checkDB();
// syncDB();
app.listen(PORT, () => {
    console.log(`Servidor en marcha en puerto ${PORT}`);
})
