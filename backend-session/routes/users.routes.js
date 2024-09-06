import { Router } from "express";
import { login, session, logout } from "../controllers/users.controllers.js";

const routerUser= Router();

routerUser.post("/login",login );

// Ruta para obtener los datos de la sesión
routerUser.get("/session",session );

// Ruta para cerrar la sesión
routerUser.post("/logout", logout);

export default routerUser;