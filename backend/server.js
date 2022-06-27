/* eslint-disable no-undef */
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import { UserRouter } from './src/routers/UserRouter.js'
import { PlantRouter } from './src/routers/PlantRouter.js'
import { environment } from './src/environments/environment.js'
import cors from 'cors'

//****EXPRESS SETUP****/
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//****MONGO SETUP****/
//*Mongo environment variables
const mongo = environment.mongo

//*Connect to MongoDB
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
)

//******ROUTERS*******/
app.use('/api/plants', PlantRouter)
app.use('/api/users', UserRouter)

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

//*****PORT SETUP******/
const SERVER_PORT = process.env.SERVER_PORT || 3001

app.listen(SERVER_PORT, () => {
    console.log('Running on port: ' + SERVER_PORT)
})
