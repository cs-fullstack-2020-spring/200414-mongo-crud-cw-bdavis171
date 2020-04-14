// resident schema

// reference mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define Resident Schema
const ResidentSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        pets: Array,
        single: Boolean,
        phoneNumber: Number
    }
);

module.exports = mongoose.model('resident',ResidentSchema);