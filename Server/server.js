const express = require('express');
const app = express();
const port = 3100

// Enable commination with database
const db = require("./queries");

app.listen(port);