// //Importar la conexion de la db

// import db from "../database/db.js";
// import { DataTypes } from "sequelize";

// const BlogModel = db.define('blogs',{
//     title: {type: DataTypes.STRING},
//     content: {type: DataTypes.STRING}
// });

// export default BlogModel;

//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes, Sequelize } from "sequelize";

const BlogModel = db.define("blogs", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
  link: { type: DataTypes.STRING },
  tecnonology: [DataTypes.OBJECT],
});

export default BlogModel;
