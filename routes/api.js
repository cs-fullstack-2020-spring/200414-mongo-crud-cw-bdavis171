// resident route

// reference express
const express = require('express');
const router = express.Router();

// import schema
const ResidentCollection = require('../models/ResidentSchema');

// POST: create new resident
router.post('/', (req,res) => {
    ResidentCollection.create(req.body,(errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// GET: find multiple by last name
router.get('/searchByLastname/:lastname', (req,res) => {
    ResidentCollection.find({lastName: req.params.lastname},(errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// GET: find single residents
router.get('/single',(req,res) => {
    ResidentCollection.find({single: true},(errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// GET: find one by first name
router.get('/searchByFirstname/:firstname',(req,res) => {
    ResidentCollection.findOne({firstName: req.params.firstname},(errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// GET: display all residents
router.get('/', (req,res) => {
    ResidentCollection.find((errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// PUT: update a resident by phone number
router.put('/:phone',(req,res) => {
    ResidentCollection.findOneAndUpdate({phoneNumber: req.params.phone},req.body,(errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// DELETE: delete a resident by phone number
router.delete('/:phone',(req,res) => {
    ResidentCollection.findOneAndDelete({phoneNumber: req.params.phone},(errors,results) => {
        errors ? res.send(errors):res.send(`Resident(s) with phone number ${req.params.phone} deleted`);
    })
})

module.exports = router;