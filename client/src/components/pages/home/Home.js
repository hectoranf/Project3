import React, { Component } from 'react'

import MeetingService from './../../../service/meeting.service'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import SearchCard from './../meeting/MeetingSearchCard'

class Home extends Component {

    constructor() {
        super()
        this.state = {
            myMeetings: [],
            favouriteMeetings: [],
            nearMeetings: []
        }
        this.meetingService = new MeetingService()
    }

    getByTitle = (title) => {
        this.meetingService.getByTitle(title)
            .then(response => this.setState({ favouriteMeetings: response.data }))
            .catch(err => console.log(err))
    }

    getMeetings = () => {
        this.meetingService.getAllMeetings()
            .then(response => {
                let date
                response.data.map(elm => {
                    date = new Date(Date.parse(elm.date))
                    elm.date = date
                })
                response.data.sort((a, b) => a.date - b.date)

                this.setState({ nearMeetings: response.data })
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getMeetings()
        console.log(this.props.user)
    }

    render() {
        return (
            <Container fluid>
                <Row as='section' >
                    {this.state.nearMeetings.map(elm => <SearchCard key={elm._id} {...elm} />)}
                </Row>
            </Container>
        )
    }

}

export default Home