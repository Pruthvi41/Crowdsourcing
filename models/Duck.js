const mongoose = require('mongoose');
const DuckSchema = new mongoose.Schema({
    timeOfTheDay:{
        type: String,
        required: true
    },
    foodType:{
        type: String,
        required: true
    },
    duckLocation:{
        type: String,
        required: true
    },
    duckCount:{
        type: Number,
        required: true
    },
    foodQuantity:{
        type: Number,
        required: true
    }
})
module.exports = Duck = mongoose.model('duck', DuckSchema);