import React, { Component } from 'react'

import MeetingService from './../../../service/meeting.service'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

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
                    return elm.date = date
                })
                response.data.sort((a, b) => a.date - b.date)

                this.setState({ nearMeetings: response.data })
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getMeetings()
    }

    render() {
        return (
            <>
                
                <Container className='home' fluid>
                    <Tabs
                        defaultActiveKey="near"
                        id="uncontrolled-tab-example"
                        className='nav-tab'
                    >
                        <Tab eventKey="near" title="Near" className='tab'>
                            <Row as='section' >
                                {this.state.nearMeetings.map(elm => <SearchCard key={elm._id} {...elm} />)}
                            </Row>
                        </Tab>
                        <Tab eventKey="following" title="Following">
                            <Row as='section' >
                                {this.state.nearMeetings.map(elm => <SearchCard key={elm._id} {...elm} />)}
                            </Row>
                        </Tab>
                    </Tabs>
                    {/* <Row as='section' >
                    {this.state.nearMeetings.map(elm => <SearchCard key={elm._id} {...elm} />)}
                </Row> */}
                </Container>
            </>
        )
    }

}

export default Home