'use strict';

const express = require('express');
const jwt = require('dorongrinstein-firebase-jwt');
const logger = require('dorongrinstein-gcp-logging');

function main() {
  const app = express();
  app.use(express.json());
  app.use(jwt.getValidator());
  app.use(logger.getMiddleware('dummy'));

  app.post('/dummy', async (req, res) => {
      let body = req.body;
      req.log("dummy called")
      res.json(body);
  });

  
  app.get('/dummy', (req, res) => {
    res.json({ "message": "dummy service" });
  });
  app.get('/', (req, res) => {
    res.json({ "message": "ready" })
  });
  app.listen(8080, () => console.log('listening on 8080'));
}


main();
