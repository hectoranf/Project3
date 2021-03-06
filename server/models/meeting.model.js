const mongoose = require("mongoose")
const Schema = mongoose.Schema

const messageSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    text: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const meetingSchema = new Schema({
    meetingName: {
        type: String,
        required: true
    },
    media: {
        title: String,
        type: {
            type: String,
            enum: ['tv', 'movie'],
            default: 'tv'
        },
        idTMDB: {
            type: Number,
            default: 0
        },
        posterPic:
        {
            type: String
        }
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    freeSeats: {
        type: Number,
        required: true
    },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    snacksList: [String],
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [Number]
    },
    loc: {
        address: String,
        coordinates: [Number]
    },
    messages: [messageSchema]
},
    {
        timestamps: true
    })

const Meeting = mongoose.model("Meeting", meetingSchema)

module.exports = Meeting