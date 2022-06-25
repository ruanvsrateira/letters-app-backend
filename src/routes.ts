import { Router } from "express";
import lettersController from "./controllers/lettersController";
import existById from './middlewares/existById';

const routes = Router();

routes.get('/', lettersController.index);
routes.post('/letter', lettersController.store);
routes.get('/letter/:id/delete', existById, lettersController.destroy);
routes.post('/letter/:id/edit', existById, lettersController.edit);

export default routes;