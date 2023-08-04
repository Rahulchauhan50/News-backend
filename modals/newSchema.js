const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    india:[],
    business:[],
    sports:[],
    entertainment:[],
    health:[],
    science:[],
    technology:[]
})

const Data = mongoose.model('data',DataSchema)

module.exports = Data;

