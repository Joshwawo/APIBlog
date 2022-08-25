import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
// console.log(process.env.API_KEY)

const API_KEY = process.env.API_KEY;

const fetchDataCards = async () => {
  return await axios
    .get("https://api.clashroyale.com/v1/cards", {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
    //   console.log(respuesta.data);
    .then((respuesta) => respuesta.data)
    .catch((error) => console.log(error));
};
//TODO:PONER UN MIDDLEWARE PARA QUE SOLO SE PUEDA ACCEDER A ESTE CONTROLADOR SI SE HA LOGEADO
//TODO:PONER UPPERCASE EN EL NOMBRE DE LOS CLANS Y JUGADORES
const fetchDataByID = async (userHashtag) => {
  // const userId = "CUG0LUP8R".toUpperCase();
  // const userwitchhastack ="#UJJR8PUCG".toUpperCase().replace("#", "%23");

  const url = `https://api.clashroyale.com/v1/players/${userHashtag}`;
  return await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
    .then((respuesta) => respuesta.data)
    .catch((error) => error);
};

const fetchDataChest = async (userHashtag) => {
  //"https://api.clashroyale.com/v1/players/%23QPYJPJ20/upcomingchests";
  // %23QPYJPJ20
  const url =
    `https://api.clashroyale.com/v1/players/${userHashtag}/upcomingchests`;

  return await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
    .then((respuesta) => respuesta.data)
    .catch((error) => error);
};

const fetchDataClan = async () => {
  const url = "https://api.clashroyale.com/v1/clans/%23LRJ0GLV2";

  return await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
    .then((respuesta) => respuesta.data)
    .catch((error) => error);
};

export const getAllCard = async (req, res) => {
  const dataCard = await fetchDataCards();
  res.json(dataCard);
};

export const getUser = async (req, res) => {
  // const userHashtag = "#QPYJPJ20".toUpperCase().replace("#", "%23");
  const userHashtag = req.query.userHashtag;
  const userbyId = await fetchDataByID(userHashtag);
    // console.log(userbyId);

  res.json(userbyId);
};

export const getUserChest = async (req, res) => {
  //  const userHashtag = "#QC2J2QYQ".toUpperCase().replace("#", "%23");
  if (req.query.userHashtag === undefined) {
    res.json({
      error: "No se ha introducido ningun usuario",
    })
    console.log("No se ha introducido ningun usuario");
  }else{
    const userHashtag = req.query.userHashtag;
    const userChest = await fetchDataChest(userHashtag);
    console.log(userChest);
    res.json(userChest);
  }
  

  // res.json({messaje: 'Desde getUserChest'})
};

export const getClan = async (req, res) => {
  // res.json({mesage: 'Desde getClan'})
  const userClan = await fetchDataClan();
  res.json(userClan);
};
