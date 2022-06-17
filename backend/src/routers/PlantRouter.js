import express from 'express'
import * as controller from '../controllers/PlantController.js'

const router = express.Router()
const path = '/'

router.route(path)
    .get(controller.getAllPlants)
    .post(controller.createPlant)


router.route(path + 'indoor')
    .get(controller.getIndoorPlants)

router.route(path + 'outdoor')
    .get(controller.getOutdoorPlants)


//**Must be below above routes*/
router
    .route(path + ':id')
    .get(controller.getPlantById)
    .put(controller.updatePlant)
    .delete(controller.deletePlant)


export const PlantRouter = router
