import React, { Component } from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SearchCard from './../meeting/MeetingSearchCard'
import MeetingService from './../../../service/meeting.service'

class MyMeetings extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allMeetings: [],
            createdMeetings: [],
            joinedMeetings: []
        }
        this.meetingService = new MeetingService()
    }

    componentDidMount = () => {
        let createdAux = [], joinedAux = [], allAux = []
        let promises = []
        let date

        this.props.user.createdMeetings.forEach(elm => {
            promises.push(this.meetingService.getById(elm))
        })
        Promise.all(promises)
            .then(response => {
                response.forEach(elm => createdAux.push(elm.data))
                promises = []
                this.props.user.joinedMeetings.forEach(elm => promises.push(this.meetingService.getById(elm)))
            })
            .then(() => Promise.all(promises))
            .then(response => response.forEach(elm => joinedAux.push(elm.data)))
            .then(() => {
                createdAux.forEach(elm => {
                    date = new Date(Date.parse(elm.date))
                    elm.date = date
                })
                createdAux.sort((a, b) => a.date - b.date)
                joinedAux.forEach(elm => {
                    date = new Date(Date.parse(elm.date))
                    elm.date = date
                })
                joinedAux.sort((a, b) => a.date - b.date)
                allAux = createdAux.concat(joinedAux)
                allAux.sort((a, b) => a.date - b.date)

                this.setState({ allMeetings: allAux, createdMeetings: createdAux, joinedMeetings: joinedAux })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container className='home' fluid>
                <Tabs
                    defaultActiveKey={"all"}
                    id="uncontrolled-tab-example"
                    className='nav-tab'
                >
                    <Tab eventKey="all" title="Todas tus quedadas">
                        <Row as='section' >
                            <Col md='12'>
                                <header>
                                    <h1>Todas tus quedadas</h1>
                                </header>
                            </Col>
                            {this.state.allMeetings.map((elm, idx) => <SearchCard key={idx} {...elm} />)}
                        </Row>
                    </Tab>
                    <Tab eventKey="creator" title="Creadas por ti" className='tab'>
                        <Row as='section' >
                            <Col md='12'>
                                <header>
                                    <h1>Quedadas creadas por ti</h1>
                                </header>
                            </Col>
                            {this.state.createdMeetings.map((elm, idx) => <SearchCard key={idx} {...elm} />)}
                        </Row>
                    </Tab>
                    <Tab eventKey="participant" title="Participas" className='tab'>
                        <Row as='section' >
                            <Col md='12'>
                                <header>
                                    <h1>Quedadas en las que participas</h1>
                                </header>
                            </Col>
                            {this.state.joinedMeetings.map((elm, idx) => <SearchCard key={idx} {...elm} />)}
                        </Row>
                    </Tab>

                </Tabs>
            </Container>
        )
    }

}

export default MyMeetings