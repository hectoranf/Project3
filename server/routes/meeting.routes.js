const express = require("express")
const router = express.Router()

const Meeting = require('../models/meeting.model')
const User = require('../models/user.model')

router.get('/getAll', (req, res, next) => {
    Meeting.find()
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

router.get('/:id', (req, res, next) => {
    Meeting.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

module.exports = router