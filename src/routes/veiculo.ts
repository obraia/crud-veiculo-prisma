import express from 'express';
import { Veiculo as Controller } from '../controllers/Veiculo';

const controller = new Controller();
const routes = express.Router();

routes.get('/', controller.index);
routes.get('/:placa', controller.show);
routes.post('/', controller.create);
routes.put('/', controller.update);
routes.delete('/:placa', controller.delete);

export { routes };