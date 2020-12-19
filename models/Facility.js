const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FacilitySchema = new Schema({
    facID:{
        type: String,
        required: true
    },
    facilityName:{
        type: String
    },
    facilityAddress:{
        type: String
    },
    slots:{
        type: [Number]
    },
    maxCapacity:{
        type: Number,
        required: true,
        default: 16
    }
})

module.exports = Facility = mongoose.model('facility',FacilitySchema)