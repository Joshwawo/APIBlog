import axios from "axios";
import dotenv from "dotenv";
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from "http-status-codes";

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
  // res.json({ message: "hola desde lolChamps" });

  try {
  res.status(StatusCodes.OK).json({ message: "hola desde lolChamps" });
    
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error al obtener los campeones",
    });
  }

};

export const lolAllChamps = async (req, res) => {

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

export const getPlayerName = async (req, res, next) => {
  const playerName = req.query.playerName;
  const getPlayerName = await fetchPlayer(playerName);
  console.log(getPlayerName);
  res.json(getPlayerName);
};
