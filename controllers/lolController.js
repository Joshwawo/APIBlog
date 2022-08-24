import axios from "axios";
import dotenv from "dotenv";

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

export const lolChamps = (req, res) => {
  res.json({ message: "hola desde lolChamps" });
};

export const lolAllChamps = async (req, res) => {
  // res.json({message:'Hola desde allChamps'})
  const allChamps = await fetchAllChamps();
  res.json(allChamps);
};

export const getPlayerName = async (req, res) => {
    const playerName = req.query.playerName;
    // console.log(playerName)
  // res.json({message: 'Hola desde get by name'})
//   let playerName = "peje";
  const getPlayerName = await fetchPlayer(playerName);
  // console.log(getPlayerName)
  console.log(getPlayerName);
  res.json(getPlayerName);
};
