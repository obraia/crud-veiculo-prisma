import express from 'express';
import { routes } from './routes.config';

const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(routes);

export { app };