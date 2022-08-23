import express from 'express'
import {lolChamps,lolAllChamps} from '../controllers/lolController.js'



const routerLol = express.Router()

routerLol.get("/",lolChamps)
routerLol.get("/champs",lolAllChamps)

export default routerLol