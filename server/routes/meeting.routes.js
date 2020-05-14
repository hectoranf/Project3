const express = require("express")
const router = express.Router()

const Meeting = require('../models/meeting.model')
const User = require('../models/user.model')


router.get('/getAll', (req, res, next) => {
    Meeting.find()
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//RegEx
router.get('/media', (req, res, next) => {
    Meeting.find({ 'media.title': { $regex: new RegExp(req.query.title.replace(/%20/g, " "), "i") } })
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

router.get('/:id', (req, res, next) => {
    Meeting.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

router.post('/create', (req, res, next) => {
    Meeting.create(req.body)
        .then(data => User.findByIdAndUpdate(data.creator, { $push: { createdMeetings: data._id } }, { new: true }))
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//HECTOR del futuro:revisar req.user._id????? No he sabido testearlo con postman y no me convence, sorry
router.post('/:id/join', (req, res, next) => {
    Meeting.findByIdAndUpdate(req.params.id, { $push: { participants: req.user._id } }, { new: true })
        .then(data => User.findByIdAndUpdate(req.user._id, { $push: { joinedMeetings: data._id } }, { new: true }))
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

router.post('/:id/message', (req, res, next) => {
    Meeting.findByIdAndUpdate(req.params.id, { $push: { messages: req.body } }, { new: true })
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

module.exports = router