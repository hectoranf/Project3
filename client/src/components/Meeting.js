import React, { Component } from 'react'
import MeetingService from './../service/meeting.service'

class Meeting extends Component {

    constructor() {
        super()
        this.state = {
            meetings: []
        }
        this.meetingService = new MeetingService()
    }

    getAllMeetings = () => {
        this.meetingService.getAllMeetings()
            .then(response => this.setState({ meetings: response.data }))
            .catch(err => console.log(err))
    }

    getByTitle = (title) => {
        this.meetingService.getByTitle(title)
            .then(response => console.log(response.data))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getByTitle('the f')
    }

    render() {
        return (
            <>
                <h1>Los meetings para ver The Flash</h1>
                <ul>
                    {this.state.meetings.map(elm => <li key={elm._id}>{elm.media.title}</li>)}
                </ul>
            </>
        )
    }

}

export default Meeting