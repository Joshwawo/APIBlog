import {Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize({
    host: process.env.HOST,
    username: process.env.USER,
    database: process.env.BDNAME,
    password: process.env.PASSWORD,
    dialect: 'mysql',
    logging: false,
});






export default db;