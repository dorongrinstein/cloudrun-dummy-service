'use strict';

const express = require('express');
const app = express();

app.get('/dummy', (req, res) => res.json({"message": "dummy service"}));
app.get('/', (req, res) => res.json({"message": "ready"}));
app.listen(8080, () => console.log('listening on 8080'));