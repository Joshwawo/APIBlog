import axios from "axios";
import dotenv from "dotenv";
import cors from 'cors';

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

export const lolChamps = (req, res, next) => {

    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
    res.json({ message: "hola desde lolChamps" });
};

export const lolAllChamps = async (req, res, next) => {
  // res.json({message:'Hola desde allChamps'})
  //asd
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173/");
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,POST, PUT, DELETE, OPTIONS")
  next();
  const allChamps = await fetchAllChamps();
  res.json(allChamps);
};

// export const getPlayerName = async (req, res) => {
//   const playerName = req.query.playerName;

//   const getPlayerName = await fetchPlayer(playerName);
//   console.log(getPlayerName);
//   res.json(getPlayerName);
// };

export const getPlayerName = async (req, res, next) => {

    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST, PUT, DELETE, OPTIONS");
    next();
    const playerName = req.query.playerName;
    const getPlayerName = await fetchPlayer(playerName);
    console.log(getPlayerName);
    res.json(getPlayerName);
  };
  