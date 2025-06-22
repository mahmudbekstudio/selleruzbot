import dotenv from 'dotenv';
import app from './app.js';
import Routes from './modules/routes.js';
import Database from './Database.js';

dotenv.config();

const db = new Database();
db.connect();

//const mongoose = require('mongoose');
const routes = new Routes();
routes.init();

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});