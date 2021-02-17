const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
    type: Number,
    required: true,
};

const requiredString = {
    type: String,
    required: true,
};

const customerSchema = new Schema( { 

    name: requiredString,
    image: requiredString,
    latitude: {...requiredNumber, min: -90, max: 90},
    longitude: {...requiredNumber, min: -180, max: 180},
    email: requiredString,
    address: requiredString,
    phoneNumber: requiredString,
    carBrand: requiredString,
    occupation: requiredString,  
    rating: { type: Number, min: 0, max: 5, default: 0 },

}, { 
    timestamps:true, 
   } );

const CustomerEntry = mongoose.model('CustomerEntry', customerSchema);

module.exports = CustomerEntry;