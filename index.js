require('dotenv').config();

const express = require('express');
const app = express();

require('./server')(app, express);