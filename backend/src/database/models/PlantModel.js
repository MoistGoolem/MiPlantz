import mongoose from 'mongoose'
const { Schema } = mongoose

const Name = new Schema({
    botanical: {
        species: {
            type: String,
        },
        subSpecies: {
            variety: {
                type: String,
            },
            cultivar: {
                type: String,
            },
            hybrid: {
                type: String,
            },
        },
    },
    common: {
        type: String,
    },
})

export const PlantSchema = new Schema(
    {
        name: {
            type: Name,
            required: true,
        },
        placement: {
            indoor: {
                type: Boolean,
                required: true,
            },
            outdoor: {
                type: Boolean,
                required: true,
            },
            light: {
                type: String,
            },
        },
        watering: {
            type: String,
        },
        climate: {
            type: String,
        },
        humidity: {
            type: String,
        },
        repotting: {
            interval: {
                type: String,
            },
            specifics: {
                type: String,
            },
        },
        feeding: {
            npk: {
                type: String,
            },
            interval: {
                type: String,
                default: 'Every 2-4 weeks in the growing season.',
            },
        },
        additionalInfo: {
            houseplant: {
                type: Boolean,
            },
            tree: {
                type: Boolean,
            },
            conifer: {
                type: Boolean,
            },
            broadleaf: {
                type: Boolean,
            },
            evergreen: {
                type: Boolean,
            },
            deciduous: {
                type: Boolean,
            },
            flowering: {
                type: Boolean,
            },
            fruiting: {
                type: Boolean,
            },
            optionalInfo: {
                type: String,
            },
        },
        image: {
            type: String
        }
    },
    {
        timestamps: true,
    }
)

export const Plant = mongoose.model('Plant', PlantSchema, 'Plants')
