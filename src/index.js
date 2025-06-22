import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import Routes from './modules/routes.js';

//const mongoose = require('mongoose');
const routes = new Routes();
routes.init();

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});