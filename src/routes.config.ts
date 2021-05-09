import express from 'express';
import { routes as veiculoRotas } from './routes/veiculo';

const routes = express.Router();

routes.use('/veiculo', veiculoRotas)

export { routes };