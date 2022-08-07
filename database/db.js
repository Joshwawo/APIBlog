import {Sequelize} from "sequelize";

// const db = new Sequelize({
//     username: 'root',
//     host: 'localhost',
//     database: 'blog',
//     password: 'root',
//     dialect: 'mysql',
//     logging: false,
// });

// 'blog','root', 'root',
const db = new Sequelize({
    host: 'us-cdbr-east-06.cleardb.net',
    username: 'b2d3fcdff1bcef',
    database: 'heroku_dc4e932dba01a66',
    password: '444ca69e',
    dialect: 'mysql',
    logging: false,
});



export default db;