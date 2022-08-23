import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
// console.log(process.env.API_KEY)

const API_KEY = process.env.API_KEY;

const fetchData = async () => {
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

const fetchDataByID = async () => {
  const url = "https://api.clashroyale.com/v1/players/%23QPYJPJ20";
  return await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
    .then((respuesta) => respuesta.data)
    .catch((error) => error);
};

const fetchDataChest = async ()=>{
    const url ="https://api.clashroyale.com/v1/players/%23QPYJPJ20/upcomingchests"

    return await axios.get(url, {
        headers:{
            Authorization: `Bearer ${API_KEY}`
        }
    })
    .then(respuesta => respuesta.data)
    .catch(error => error)
   
}

const fetchDataClan = async ()=>{
    const url = "https://api.clashroyale.com/v1/clans/%23LRJ0GLV2"

    return await axios.get(url,{
        headers:{
            Authorization: `Bearer ${API_KEY}`
        }
    })
    .then(respuesta => respuesta.data)
    .catch(error => error)
}

export const getAllCard = async (req, res) => {
  // res.json({message:'Hola desde getAllCards'})
  // res.json({message:'Hola desde cardController'})
  // console.log('Hola desde cardALl')
  // res.json({ message2: "Hola desde aki" });
  const dataCard = await fetchData();
  res.json(dataCard);
};

export const getUser = async (req, res) => {
  // res.json({message:'Hola desde la ruta, getUser'})
  const userbyId = await fetchDataByID();
//   console.log(userbyId);

  res.json(userbyId);
};

export const getUserChest = async(req, res)=>{

    const userChest = await fetchDataChest()
    // console.log(userChest)
    res.json(userChest)
    // res.json(userChest)

    // res.json({messaje: 'Desde getUserChest'})
}

export const getClan = async(req, res)=>{
    // res.json({mesage: 'Desde getClan'})
   const userClan = await fetchDataClan()
   res.json(userClan)
}
