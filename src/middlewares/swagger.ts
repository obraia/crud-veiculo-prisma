import { Express } from 'express';
import fs from 'fs';
import path from 'path';
import jsyaml from 'js-yaml';
import swaggerTools from 'swagger-tools';
import swaggerUIExpress from 'swagger-ui-express';

const spec = fs.readFileSync(path.join(__dirname, '..', 'swagger', 'swagger.yaml'), 'utf8');
const swaggerDoc = jsyaml.load(spec) as swaggerUIExpress.JsonObject;

export const swagger = (app: Express) => {
  swaggerTools.initializeMiddleware(swaggerDoc, middleware => {
    app.use('/api-docs', swaggerUIExpress.serve, swaggerUIExpress.setup(swaggerDoc));
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerRouter({ controllers: path.join(__dirname, '../controllers'), useStubs: false }));
    app.use(middleware.swaggerUi());
  });
};