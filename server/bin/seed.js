const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
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
        idTMDB: 60735,
        posterPic: "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
    },
    {
        title: "Ley y orden: unidad de víctimas especiales",
        idTMDB: 2734,
        posterPic: "/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg"
    },
    {
        title: "Rick y Morty",
        idTMDB: 60625,
        posterPic: "/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg"
    },
    {
        title: "Anatomía de Grey",
        idTMDB: 1416,
        posterPic: "/eqgIOObafPJitt8JNh1LuO2fvqu.jpg"
    },
    {
        idTMDB: 456,
        title: "Los Simpson",
        posterPic: "/u8BMLmwoc7YPHKSWawOOqC1c8lJ.jpg",

    },
    {
        title: "Breaking Bad",
        idTMDB: 1396,
        posterPic: "/mVhQd5ZiAcUJfFWPJRZW4Mliyur.jpg"
    },
    {
        title: "Sobrenatural",
        idTMDB: 1622,
        posterPic: "/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg"
    },
    {
        title: "The Blacklist",
        idTMDB: 46952,
        posterPic: "/y3Huzln26zGNW4RCr0h4PTwEpfi.jpg"
    },
    {
        title: "Westworld",
        idTMDB: 63247,
        posterPic: "/gvX38K4xcolV6Vjs1uh0MNrUTH8.jpg"
    },
    {
        title: "Friends",
        idTMDB: 1668,
        posterPic: "/f496cm9enuEsZkSPzCwnTESEK5s.jpg"
    },
    {
        title: "Outlander",
        idTMDB: 56570,
        posterPic: "/wwxKbrMlwMrC06B7aCIkDy3SAo6.jpg"
    },
    {
        title: "Talking Tom and Friends",
        idTMDB: 81425,
        posterPic: "/fVeSFv892YdLcvftJAZPSDBTpyp.jpg"
    },
    {
        title: "Doctor Who",
        idTMDB: 57243,
        posterPic: "/3EcYZhBMAvVw4czcDLg9Sd0FuzQ.jpg"
    },
    {
        title: "Diriliş: Ertuğrul",
        idTMDB: 66017,
        posterPic: "/rOar34cNLn2sgDH5FmAa1bvMpBv.jpg"
    },
    {
        title: "Navy: Investigación criminal",
        idTMDB: 4614,
        posterPic: "/q9TVqJSHfJPsEJGHtxHuBvOdKu9.jpg"
    },
    {
        title: "Riverdale",
        idTMDB: 69050,
        posterPic: "/f9glyInFlVmyJGB95jLdOo3uMtJ.jpg"
    },
    {
        title: "Juego de Tronos",
        idTMDB: 1399,
        posterPic: "/j24NiYZHsuLEdyYqUunlVCapC04.jpg"
    },
    {
        title: "Supergirl",
        idTMDB: 62688,
        posterPic: "/4ka8vAzAFUZFKxWyfGfwVcSXuZo.jpg"
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
    array.push({
        username: 'dev',
        email: 'hectorproject3@gmail.com',
        password: bcrypt.hashSync('dev', salt),
        profilePic: Faker.image.avatar(),
        place: [{
            name: 'Casa',
            type: 'Point',
            coordinates: [40.441951, -3.702496]
        }],
        followingList: getFollowingList(randomInt(4, 1))
    })

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
                media: movieList[movieIndex],
                date: Faker.date.between(new Date(2020, 4, 14), new Date(2020, 5, 30)),
                description: Faker.lorem.paragraph(randomInt(4, 1)),
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