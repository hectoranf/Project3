const mongoose = require("mongoose")
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'Casa'
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            default: [40.441951, -3.702496]
        }
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
    places: {
        type: [placeSchema],
        default: [placeSchema]
    },
    followingList: [{
        title: String,
        type: {
            type: String,
            enum: ['tv', 'movie'],
            default: 'tv'
        },
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