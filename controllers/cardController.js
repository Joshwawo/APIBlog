import axios from "axios";
import dotenv from "dotenv";
process.binding('http_parser').HTTPParser = import('http-parser-js').HTTPParser;


dotenv.config();
// console.log(process.env.API_KEY)

const API_KEY = process.env.API_KEY;
// const API_KEY ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjdjYjk1MzVkLWVhMGUtNDZmNi05NDQwLWNhMDAwMTczZjk4ZCIsImlhdCI6MTY2MTQ2ODAwNSwic3ViIjoiZGV2ZWxvcGVyLzJlYTI4MzY1LWIyYzctM2Q2OC0wODBmLTZiN2U2NTlmOTVjMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS43OS4yMTguNzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.Fva9oR4L1jE6HZ6yrn9fcMtDliGHtM3uqbCX-4hkEqQWvaTU_BbE_Il0m1SuENhR74S_xoD6aqEOgOLvhkIOtA"
//taataat
const fetchDataCards = async () => {
 return await axios
    .get("https://proxy.royaleapi.dev/v1/cards", {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/json ; charset=utf-8',
        'Accept-Language': 'en-US',
        'Accept-Encoding': 'gzip, deflate',
        // 'set-cookie': [ 'someCookieName=rHA\u0001sBlP; path=/; Max-Age=900' ],


        

        
       
      },

    })
      // console.log(respuesta.data);
    .then((respuesta) => respuesta.data)
    .catch((error) => error);
    // console.log(respuesta.data);
};
//TODO:PONER UN MIDDLEWARE PARA QUE SOLO SE PUEDA ACCEDER A ESTE CONTROLADOR SI SE HA LOGEADO
//TODO:PONER UPPERCASE EN EL NOMBRE DE LOS CLANS Y JUGADORES
const fetchDataByID = async (userHashtag) => {
  // const userId = "CUG0LUP8R".toUpperCase();
  // const userwitchhastack ="#UJJR8PUCG".toUpperCase().replace("#", "%23");
  // const proxy = "https://proxy.royaleapi.dev/v1/players/"
  // const url = `https://api.clashroyale.com/v1/players/${userHashtag}`;
  const url = `https://proxy.royaleapi.dev/v1/players/${userHashtag}`;
  return await axios
    .get(url, {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/json ; charset=utf-8',
        'Accept-Language': 'en-US',
        'Accept-Encoding': 'gzip, deflate',
      },
    })
    .then((respuesta) => respuesta.data)
    .catch((error) => error);
};

const fetchDataChest = async (userHashtag) => {
  //"https://api.clashroyale.com/v1/players/%23QPYJPJ20/upcomingchests";
  // %23QPYJPJ20
  //aaas
  
  const url =
    `https://proxy.royaleapi.dev/v1/players/${userHashtag}/upcomingchests`;

  return await axios
    .get(url, {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/json ; charset=utf-8',
        'Accept-Language': 'en-US',
        'Accept-Encoding': 'gzip, deflate',
      },
    })
    .then((respuesta) => respuesta.data)
    .catch((error) => error);
};
// https://proxy.royaleapi.dev/v1/players/${userHashtag}/upcomingchests
//tacos dechale
const fetchDataClan = async () => {
  const url = "https://proxy.royaleapi.dev/v1/clans/%23LRJ0GLV2";

  return await axios
    .get(url, {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/json ; charset=utf-8',
        'Accept-Language': 'en-US',
        'Accept-Encoding': 'gzip, deflate',
      },
    })
    .then((respuesta) => respuesta.data)
    .catch((error) => error);
};

export const getAllCard = async (req, res) => {
  const dataCard = await fetchDataCards();
  // console.log(dataCard);
   console.log('data card clash/cardss')
  res.json(dataCard);
};

export const getUser = async (req, res) => {
  // const userHashtag = "#QPYJPJ20".toUpperCase().replace("#", "%23");
  const userHashtag = req.query.userHashtag;
  const userbyId = await fetchDataByID(userHashtag);
    console.log(userbyId);
    console.log('userbyId ruta clash/user');

  res.json(userbyId);
};

export const getUserChest = async (req, res) => {
  //  const userHashtag = "#QC2J2QYQ".toUpperCase().replace("#", "%23");
  if (req.query.userHashtag === undefined) {
    res.json({
      error: "No se ha introducido ningun usuario",
    })
    console.log("No se ha introducido ningun usuario clash/userchest");
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
  console.log(userClan);
  console.log('Desde getClan funciona xi heroku qlo')
  res.json(userClan);
};
