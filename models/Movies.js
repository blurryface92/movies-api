const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
    user:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    releaseDate:{
        type: Date,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    IMDBRating: {
        type: Number,
        required: true
    },

    review: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Movies', MoviesSchema);
    