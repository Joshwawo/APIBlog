import express from 'express'
import {lolChamps,lolAllChamps,getPlayerName} from '../controllers/lolController.js'



const routerLol = express.Router()

routerLol.get("/",lolChamps)
routerLol.get("/champs",lolAllChamps)
routerLol.get("/player",getPlayerName)

export default routerLol