const express = require("express")
const router = express.Router()
const ensureLogin = require("connect-ensure-login")

const Meeting = require('../models/meeting.model')
const User = require('../models/user.model')


router.get('/getAll', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    Meeting.find({}, null, { sort: { date: -1 } })
        .populate('creator')
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//RegEx
router.get('/media', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    Meeting.find({ 'media.title': { $regex: new RegExp(req.query.title.replace(/%20/g, " "), "i") } })
        .populate('creator')
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

router.get('/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    Meeting.findById(req.params.id)
        .populate('participants')
        .populate('creator')
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

router.post('/create', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    Meeting.create(req.body.meeting)
        .then(data => User.findByIdAndUpdate(req.user._id, { $push: { createdMeetings: data._id } }, { new: true }))
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

router.post('/:id/join', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    Meeting.findByIdAndUpdate(req.params.id, {
        $push: { participants: req.user._id }, $inc: { freeSeats: -1 }
    }, { new: true })
        .then(data => User.findByIdAndUpdate(req.user._id, { $push: { joinedMeetings: data._id } }, { new: true }))
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

router.post('/:id/message', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    Meeting.findByIdAndUpdate(req.params.id, { $push: { messages: req.body } }, { new: true })
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

module.exports = router