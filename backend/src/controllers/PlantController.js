'use strict'
import { Plant } from '../database/models/PlantModel.js'

export const createPlant = (req, res) => {
    const data = req.body

    const plant = new Plant({
        name: data.name,
        placement: data.placement,
        watering: data.watering,
        climate: data.climate,
        humidity: data.humidity,
        repotting: data.repotting,
        feeding: data.feeding,
        feedingTime: data.feedingTime,
        additionalInfo: data.additionalInfo,
        image: data.image
    })

    plant
        .save(plant)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while creating the plant.',
            })
        })
}

export const getAllPlants = async (req, res) => {
    const { page = 1, limit = 3 } = req.query;

    try {
        const plants = await Plant.find({})
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        
        const count = await Plant.countDocuments();
    
        res.json({
            plants,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send({
            message:
                err.message ||
                'Some error occurred while retrieving plants.',
        })
    }
}

export const getIndoorPlants = (req, res) => {
    const plants = Plant.find({
        'placement.indoor': true
    });

    plants
        .then((data) => {
            if (data === null) {
                res.status(200).send({
                    message: 'No plants were found.',
                })
            }
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while retrieving plants.',
            })
        })
}

export const getOutdoorPlants = (req, res) => {
    const plants = Plant.find({
        'placement.outdoor': true
    });

    plants
        .then((data) => {
            if (data === null) {
                res.status(200).send({
                    message: 'No plants were found.',
                })
            }
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while retrieving plants.',
            })
        })
}

export const getPlantById = (req, res) => {
    const plant = Plant.findById(req.params.id)

    plant
        .then((data) => {
            if (data === null) {
                res.send({
                    message: 'No plant was found.',
                })
            }
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while retrieving plant.',
            })
        })
}

export const updatePlant = async (req, res) => {
    const data = req.body
    const id = req.params.id

    if (!req.body) {
        return res.status(400).send({
            message: 'Data to update can not be empty.',
        })
    }

    await Plant.findByIdAndUpdate(id, {
        name: data.name,
        placement: data.placement,
        watering: data.watering,
        climate: data.climate,
        humidity: data.humidity,
        repotting: data.repotting,
        feeding: data.feeding,
        feedingTime: data.feedingTime,
        additionalInfo: data.additionalInfo,
    })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: 'Cannot update plant with id: ' + id + '.',
                })
            } else {
                res.send(req.body)
            }
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                message: 'Error updating plant with id: ' + id + '.',
            })
        })
}

export const deletePlant = async (req, res) => {
    await Plant.findOneAndDelete({
        _id: req.params.id,
    })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while deleting plant.',
            })
        })
}
