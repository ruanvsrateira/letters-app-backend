import { Router } from "express";
import lettersController from "./controllers/lettersController";

const routes = Router();

routes.get('/', lettersController.index);
routes.post('/letter', lettersController.addNewLetter);

export default routes;