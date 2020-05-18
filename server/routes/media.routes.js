const express = require("express")
const router = express.Router()
const ensureLogin = require("connect-ensure-login")

const axios = require("axios")

const apiHandler = axios.create({ baseURL: 'https://api.themoviedb.org/3' })

router.get('/getAll', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    apiHandler.get(`/search/multi?api_key=${process.env.TMDB_KEY}&language=es-ES&query=${req.query.title.replace(/ /g, "%20")}`)
        .then(data => res.json(data.data))
        .catch(err => next(new Error(err)))
})

router.get('/details', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    apiHandler.get(`/${req.query.type}/${req.query.id}?api_key=${process.env.TMDB_KEY}`)
        .then(data => res.json(data.data))
        .catch(err => next(new Error(err)))
})

module.exports = router