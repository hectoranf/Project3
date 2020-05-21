import React, { Component } from 'react'
import queryString from 'query-string'

import MeetingService from './../../../../service/meeting.service'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import SearchCard from './../MeetingSearchCard'
import Map from './../../map/Map'

class MeetingFinder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            foundMeetings: []
        }
        this.meetingService = new MeetingService()
    }

    getMeetings = title => {
        console.log(title)
        this.meetingService.getByTitle(title)
            .then(response => {
                let date
                response.data.map(elm => {
                    date = new Date(Date.parse(elm.date))
                    return elm.date = date
                })
                response.data.sort((a, b) => a.date - b.date)

                this.setState({ foundMeetings: response.data })
            })
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        const values = queryString.parse(this.props.location.search)
        if (values.title !== this.state.title) this.setState({ ...this.state, title: values.title }, () => this.getMeetings(this.state.title))
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        this.setState({ ...this.state, title: values.title }, () => this.getMeetings(this.state.title))
    }

    render() {
        return (
            <Container fluid>
                <Row as='section'>
                    <Map
                        pos={this.props.user.places[0].location.coordinates}
                        zoom={15}
                        meetings={this.state.foundMeetings}
                        width={'100%'}
                        height={'50vh'}
                        marker={true}
                    />
                </Row>
                <Row as='section' >
                    {this.state.foundMeetings.map(elm => <SearchCard key={elm._id} {...elm} />)}
                </Row>
            </Container>
        )
    }

}

export default MeetingFinder