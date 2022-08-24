import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js";
import cardRoutes from './routes/routes2.js'
import lolRoutes from './routes/routes3.js'
import methodOverride  from 'method-override'

// import dotenv from "dotenv";

const app = express();
// dotenv.config();

const PORT = process.env.PORT || 8000;

//Proteger la ruta con cors
const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Bloqueado por CORS, si quieres acceder a este recurso, ponte en contacto con el administrador"));
    }
  }
};



app.use(methodOverride())
app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);
app.use("/clash",cardRoutes);
app.use("/lol",lolRoutes );


// app.use("cards")

try {
  await db.authenticate();
  console.log("Conexion exitosa a la base de datos");
} catch (error) {
  console.log(`El error de conexion es ${error}`);
}

app.get("/", (req, res) => {
  res.json({ message: "Hola desde la api del blog" });
});

app.get("/testing", cors(corsOptions), (req, res, next)=>{
  // console.error(err.stack)
  // res.status(500).send('Something broke!')
  res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
  // res.status(500).send('Something broke!')
  // res.json({message:'Hola desde testing'})
})
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
