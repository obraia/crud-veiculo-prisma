import express from 'express';
import { routes } from './routes.config';
import { swagger } from './middlewares/swagger';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
swagger(app);

export { app };