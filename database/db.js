import {Sequelize} from "sequelize";
// 'blog','root', 'root',
const db = new Sequelize({
    host: process.env.HOST,
    username: process.env.USERNAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    dialect: 'mysql',
    logging: false,
});





export default db;