import express from 'express'
import {homePageController} from '../controllers/homePage.contoller.js'

const router = express.Router() 
router.get('/',homePageController)

export default router