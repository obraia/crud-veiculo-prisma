import * as dotenv from 'dotenv';
import { server } from './src/server';

dotenv.config();

server.listen(process.env.PORT, () => {
  console.log('A aplicação está rodando na porta: ' + process.env.PORT);
})