import axios from "axios";
import dotenv from "dotenv";
import cors from 'cors';
// import {corsOptions,whitelist} from '../app';

dotenv.config();

const API_KEY_RIOT = process.env.API_KEY_RIOT;
// console.log(API_KEY_RIOT)

const fetchAllChamps = async () => {
  const url =
    "http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json";
  return await axios
    .get(url)
    .then((respuesta) => respuesta.data)
    .catch((error) => error);
};
const fetchPlayer = async (playerName) => {
  const url = `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${API_KEY_RIOT}`;
  return await axios
    .get(url)
    .then((respuesta) => respuesta.data)
    .catch((error) => console.log(error));
};

export const lolChamps =  (req, res, next) => {

    res.json({ message: "hola desde lolChamps" });
};

export const lolAllChamps = async (req, res) => {
  // res.json({message:'Hola desde allChamps'})
  //asdasdasas
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173/");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.status(200).json(await fetchAllChamps());
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173/, http://localhost:3307/lol");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET,POST, PUT, DELETE, OPTIONS")
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// console.log(error.stack)
// console.error(err.stack)
const allChamps = await fetchAllChamps();
res.status(200).json(allChamps);
//   res.status(200).json(await fetchAllChamps());

};

// export const getPlayerName = async (req, res) => {
//   const playerName = req.query.playerName;

//   const getPlayerName = await fetchPlayer(playerName);
//   console.log(getPlayerName);
//   res.json(getPlayerName);
// };

export const getPlayerName = async (req, res,) => {

    
    const playerName = req.query.playerName;
    const getPlayerName = await fetchPlayer(playerName);
    console.log(getPlayerName);
    res.json(getPlayerName);
  };
  