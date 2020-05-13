const mongoose = require('mongoose')
require('dotenv').config()

const Faker = require('faker/locale/es')
const User = require('../models/user.model')
const Meeting = require('../models/meeting.model')

const bcrypt = require('bcrypt')
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)

// const dbtitle = 'mongodb://localhost/project3'
mongoose.connect(`${process.env.DB}`, { useUnifiedTopology: true, useNewUrlParser: true })

const randomFloat = (max, min = 0) => Math.random() * (max - min) + min
const randomLatitude = () => randomFloat(40.481555, 40.375425)
const randomLongitude = () => randomFloat(-3.647014, -3.729187)
const randomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

const movieList = [
    {
        title: "The Flash",
        posterPic: "http://image.tmdb.org/t/p/w185/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
    },
    {
        title: "Rick and Morty",
        posterPic: "http://image.tmdb.org/t/p/w185/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg"
    },
    {
        title: "Law & Order: Special Victims Unit",
        posterPic: "http://image.tmdb.org/t/p/w185/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg"
    },
    {
        title: "The Simpsons",
        posterPic: "http://image.tmdb.org/t/p/w185/qcr9bBY6MVeLzriKCmJOv1562uY.jpg"
    },
    {
        title: "Grey's Anatomy",
        posterPic: "http://image.tmdb.org/t/p/w185/eqgIOObafPJitt8JNh1LuO2fvqu.jpg"
    },
    {
        title: "The Blacklist",
        posterPic: "http://image.tmdb.org/t/p/w185/y3Huzln26zGNW4RCr0h4PTwEpfi.jpg"
    },
    {
        title: "Talking Tom and Friends",
        posterPic: "http://image.tmdb.org/t/p/w185/fVeSFv892YdLcvftJAZPSDBTpyp.jpg"
    },
    {
        title: "Westworld",
        posterPic: "http://image.tmdb.org/t/p/w185/6aj09UTMQNyfSfk0ZX8rYOEsXL2.jpg"
    },
    {
        title: "Friends",
        posterPic: "http://image.tmdb.org/t/p/w185/f496cm9enuEsZkSPzCwnTESEK5s.jpg"
    },
    {
        title: "Supernatural",
        posterPic: "http://image.tmdb.org/t/p/w185/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg"
    },
    {
        title: "Breaking Bad",
        posterPic: "http://image.tmdb.org/t/p/w185/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    },
    {
        title: "Family Guy",
        posterPic: "http://image.tmdb.org/t/p/w185/q3E71oY6qgAEiw6YZIHDlHSLwer.jpg"
    },
    {
        title: "Blindspot",
        posterPic: "http://image.tmdb.org/t/p/w185/fx3SId5m3j77BOM4YJ0veJwsraq.jpg"
    },
    {
        title: "Doctor Who",
        posterPic: "http://image.tmdb.org/t/p/w185/3EcYZhBMAvVw4czcDLg9Sd0FuzQ.jpg"
    },
    {
        title: "Game of Thrones",
        posterPic: "http://image.tmdb.org/t/p/w185/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    },
    {
        title: "Riverdale",
        posterPic: "http://image.tmdb.org/t/p/w185/6zBWSuYW3Ps1nTfeMS8siS4KUaA.jpg"
    },
    {
        title: "Outlander",
        posterPic: "http://image.tmdb.org/t/p/w185/pCTSO32nTmJHkEFAv3qJLhVueEa.jpg"
    },
    {
        title: "The Walking Dead",
        posterPic: "http://image.tmdb.org/t/p/w185/reKs8y4mPwPkZG99ZpbKRhBPKsX.jpg"
    },
    {
        title: "Upload",
        posterPic: "http://image.tmdb.org/t/p/w185/6SIDIB59JYsQ8EfUgM0IaFfwXtS.jpg"
    }
]

const getFollowingList = (size) => {
    const list = []
    for (let i = 0; i < size; i++) {
        list.push(movieList[randomInt(movieList.length - 1)])
    }
    return list
}

const createUsers = (size) => {
    const array = []
    for (let i = 0; i < size; i++) {
        array.push({
            username: Faker.internet.userName(),
            email: Faker.internet.email(),
            password: bcrypt.hashSync(Faker.internet.password(), salt),
            profilePic: Faker.image.avatar(),
            place: [{
                name: 'Casa',
                type: 'Point',
                coordinates: [randomLatitude(), randomLongitude()]
            }],
            followingList: getFollowingList(randomInt(4, 1))
        })
    }
    return array
}


let seededUsers = []
let seededMeetings = []
const deleteUsers = User.deleteMany()
const deleteMeetings = Meeting.deleteMany()

Promise.all([deleteUsers, deleteMeetings])
    .then(() => User.create(createUsers(100)))
    .then(createdUsers => {
        seededUsers = createdUsers

        const meetings = []
        let seats, movieIndex, shuffled
        for (let i = 0; i < 200; i++) {
            numberSeats = randomInt(5, 1)
            movieIndex = randomInt(movieList.length - 1)

            //Creator and participantas
            shuffled = seededUsers.sort(() => 0.5 - Math.random());
            let selectedUsers = shuffled.slice(0, randomInt(numberSeats, 1));
            let participantsId = selectedUsers.slice(1).map(elm => elm._id)

            meetings.push({
                meetingName: Faker.lorem.sentence(),
                contentTitle: movieList[movieIndex].title,
                posterPic: movieList[movieIndex].posterPic,
                date: Faker.date.between(new Date(2020, 5, 14), new Date(2020, 5, 30)),
                seats: numberSeats,
                creator: selectedUsers[0]._id,
                participants: participantsId,
                freeSeats: numberSeats - participantsId.length,
                snacksList: []
            })
        }
        return Meeting.create(meetings)
    })
    .then(createdMeetings => {
        seededMeetings = createdMeetings
        let promises = []

        seededMeetings.forEach(meeting => {
            promises.push(User.findByIdAndUpdate(meeting.creator, { $push: { createdMeetings: meeting._id } }, { new: true }))
            meeting.participants.forEach(participant => promises.push(User.findByIdAndUpdate(participant, { $push: { joinedMeetings: meeting._id } }, { new: true })))
        })

        return Promise.all(promises)
    })
    .then(() => mongoose.connection.close())
    .catch(err => console.log(`An ERROR occurred: ${err}`))