import { Router } from "express";
import lettersController from "./controllers/lettersController";

const routes = Router();

routes.get('/', lettersController.index);
routes.post('/letter', lettersController.addNewLetter);
routes.get('/letter/:id/delete', lettersController.destroy);
routes.post('/letter/:id/edit', lettersController.edit);

export default routes;