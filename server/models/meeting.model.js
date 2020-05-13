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
    contentTitle: {
        type: String,
        required: true
    },
    idTMDB: {
        type: Number,
        required: true
    },
    posterPic: {
        type: String,
        required: true
    },
    date: {
        type: Date,
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
    messages: [messageSchema]
},
    {
        timestamps: true
    })

const Meeting = mongoose.model("Meeting", meetingSchema)

module.exports = Meeting