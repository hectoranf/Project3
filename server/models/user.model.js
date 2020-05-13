const mongoose = require("mongoose")
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [Number]
    }
}, {
    timestamps: true
})

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePic: {
        type: String
    },
    place: [placeSchema],
    followingList: [{
        title: String,
        idTMDB: Number,
        posterPic: String
    }],
    createdMeetings: [{ type: Schema.Types.ObjectId, ref: 'Meeting' }],
    joinedMeetings: [{ type: Schema.Types.ObjectId, ref: 'Meeting' }]
},
    {
        timestamps: true

    })

const User = mongoose.model("User", userSchema)

module.exports = User