const compression = require('compression');
const express = require('express');
const next = require('next');

const port = Number.parseInt(process.env.PORT, 10) || 1335;
const development = process.env.NODE_ENV !== 'production';
const app = next({ dev: development });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  require('@google-cloud/profiler').start({
    projectId:      process.env.GCLOUD_PROJECT_ID,
    serviceContext: {
      service: process.env.GCLOUD_SERVICE_ID,
      version: '1.0.0',
    },
  });

  const server = express();
  server.use(compression());

  server.all('*', (request, res) => handle(request, res));

  server.listen(port, (error) => {
    if (error) throw error;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
