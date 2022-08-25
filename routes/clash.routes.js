import express, { application } from "express";
import {getAllCard, getUser,getUserChest, getClan} from "../controllers/cardController.js"
// import cors from 'cors'


// const app = express()

// app.use(cors())




const routerCard = express.Router()

routerCard.get("/", async (req, res)=>{
    res.json({message: "Hola desde / de cards"})
    // const dataCard = await fetchData()
    // res.json(dataCard)
})
routerCard.get("/cards",getAllCard )
routerCard.get("/user", getUser)
routerCard.get("/userchest",getUserChest)
routerCard.get("/clan",getClan)

export default routerCard