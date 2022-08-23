import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const API_KEY = process.env.API_KEY
// console.log(API_KEY)

const fetchAllChamps = async()=>{
    const url = "http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json"
    return await axios.get(url)
    .then(respuesta => respuesta.data)
    .catch(error => error)

}

export const lolChamps = (req, res)=>{
    res.json({message: 'hola desde lolChamps'})
}

export const lolAllChamps = async(req,res)=>{
    // res.json({message:'Hola desde allChamps'})
    const allChamps = await fetchAllChamps()
    res.json(allChamps)
}