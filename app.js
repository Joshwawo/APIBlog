import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js";
import cardRoutes from "./routes/routes2.js";
import lolRoutes from "./routes/routes3.js";

// import dotenv from "dotenv";

const app = express();
// dotenv.config();

const PORT = process.env.PORT || 8000;
app.use(cors());
// app.use(methodOverride());
app.use(express.json());

//Proteger la ruta con cors
// export const whitelist = [
//   "http://localhost:3000",
//   "http://localhost:5173",
//   "177.228.67.117",
//   "192.168.1.4",
//   "http://localhost:3307/",
//   "http://localhost:3307/lol",
//   "http://localhost:3307/testing",
//   "http://127.0.0.1:5173/",
//   "http://localhost:3307/lol",
//   "http://127.0.0.1:5173/lol",
//   "http://localhost:3307/testing",
//   "2806:263:c487:539:e92b:72e2:645d:53b7",
//   "https://app-full-stack.vercel.app/"
// ];

// export const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(
//         new Error(
//           "Bloqueado por CORS, si quieres acceder a este recurso, ponte en contacto con el administrador"
//         )
//         );
//       }
//   },
// };

app.use("/blogs", blogRoutes);
app.use("/clash", cardRoutes);
app.use("/lol",lolRoutes);

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

app.get("/testing",  (req, res, next) => {
  // console.error(err.stack)
  // res.status(500).send('Something broke!')
  res.json({ msg: "This is CORS-enabled for a whitelisted domain." });
  // res.status(500).send('Something broke!')
  // res.json({message:'Hola desde testing'})
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
