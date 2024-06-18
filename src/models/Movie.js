const { Schema, SchemaType: Types, model } = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true,
        min: 1878,
        max: 2100
    },
    rating: {
        type: Number,
        require: true,
        min: 0,
        max: 5
    },
    description: {
        type: String,
        require: true,
        maxLength: 1000
    },
    imageURL: {
        type: String,
        required: true,
        RegExp: /^https?:\/\/.+/
    },
    cast: {
        type: [Types.ObjectId],
        ref: 'Cast',
        default: []
    }
});

const Movie = model('Movie', movieSchema)

module.exports = {
    Movie
};