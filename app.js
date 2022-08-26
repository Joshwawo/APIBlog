import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/blog.routes.js";
import cardRoutes from "./routes/clash.routes.js";
import lolRoutes from "./routes/lol.routes.js";
process.binding('http_parser').HTTPParser = import('http-parser-js').HTTPParser;

// import dotenv from "dotenv";
// const http = require('http');
const app = express();
// dotenv.config();

const PORT = process.env.PORT || 8000;
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.use("/blogs", blogRoutes);
app.use("/clash", cardRoutes);
app.use("/lol", lolRoutes);

try {
  await db.authenticate();
  console.log("Conexion exitosa a la base de datos");
} catch (error) {
  console.log(`El error de conexion es ${error}`);
}

app.get("/", (req, res) => {
  res.json({ message: "Hola desde la api del blog, clash, lol" });
});

app.get("/testing", (req, res, next) => {
  // console.error(err.stack
  // if(req.headers.origin === "http://localhost:3307/"){
  // res.json({ msg: "This is CORS-enabled for a whitelisted domain." });
  // }
  // res.status(500).send('Something broke!')

  // res.status(500).send('Something broke!')
  res.json({message:'Hola desde testing'})
  // res.status(StatusCodes.OK).json({message:'Hola desde testing'});
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
