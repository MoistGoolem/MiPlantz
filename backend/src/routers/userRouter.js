import express from 'express'
import * as controller from '../controllers/UserController.js'

const router = express.Router()
const path = '/'

router.route(path + 'login').post(controller.login)

router.route(path + 'register').post(controller.register)

export const UserRouter = router
