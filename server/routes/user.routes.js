const express = require("express")
const router = express.Router()
const ensureLogin = require("connect-ensure-login")

const User = require('../models/user.model')

router.post('/follow', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    User.findByIdAndUpdate(req.user._id, { $push: { followingList: req.body.media } }, { new: true }).populate('createdMeetings').populate('joinedMeetings')
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

module.exports = router