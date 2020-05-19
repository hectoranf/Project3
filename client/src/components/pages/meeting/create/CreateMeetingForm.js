import React, { Component } from 'react'

import MediaService from './../../../../service/media.service'
import MeetingService from './../../../../service/meeting.service'

class CreateMeetingForm extends Component {

    constructor() {
        super()
        this.state = {
            meetingName: ''
        }
        this.mediaService = new MediaService()
        this.meetingService = new MeetingService()
    }

    handleChange = e => {

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        this.setState({
            [e.target.name]: value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
    }

    render() {
        return (
            <section>
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Título de la quedada:
                        <input name="meetingName" value={this.state.title} onChange={this.handleChange} type="text" />
                    </label>
                </form>
                <input type="submit" value="Crear nueva película" />
            </section>
        )
    }

}

export default CreateMeetingForm