import React, { Component } from 'react'

import MeetingService from './../../../service/meeting.service'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import Loading from './../loading/LoadingPage'
import Map from './../map/Map'
import SearchCard from './../meeting/MeetingSearchCard'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            followingMeetings: [],
            allMeetings: []
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
                let aux = response.data.filter(elm => (elm.creator._id !== this.props.user._id && !elm.participants.filter(personId => personId === this.props.user._id).length && elm.freeSeats > 0))
                aux.map(elm => {
                    date = new Date(Date.parse(elm.date))
                    return elm.date = date
                })
                aux.sort((a, b) => a.date - b.date)

                const followingAux = aux.filter(meeting => this.props.user.followingList.filter((elm => elm.type === meeting.media.type && elm.idTMDB === meeting.media.idTMDB)).length > 0)
                this.setState({ allMeetings: aux, followingMeetings: followingAux })
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getMeetings()
    }

    render() {
        return (
            <Container className='home' fluid>
                {this.state.allMeetings.length > 0
                    ? <Tabs
                        defaultActiveKey={this.state.followingMeetings.length > 0 ? 'following' : "all"}
                        id="uncontrolled-tab-example"
                        className='nav-tab'
                    >
                        <Tab eventKey="following" title="Contenido que sigues">
                            <Map
                                pos={this.props.user.places[0].location.coordinates}
                                zoom={15}
                                meetings={this.state.followingMeetings}
                                width={'100%'}
                                height={'50vh'}
                                marker={true}
                            />
                            <Row as='section' >
                                <Col md='12'>
                                    <header>
                                        <hr />
                                        <h1>Quedadas de contenidos que sigues</h1>
                                    </header>
                                </Col>
                                {this.state.followingMeetings.map(elm => <SearchCard key={elm._id} {...elm} />)}
                            </Row>
                        </Tab>
                        <Tab eventKey="all" title="Todo los contenidos" className='tab'>
                            <Map
                                pos={this.props.user.places[0].location.coordinates}
                                zoom={15}
                                meetings={this.state.allMeetings}
                                width={'100%'}
                                height={'50vh'}
                                marker={true}
                            />
                            <Row as='section' >
                                <Col md='12'>
                                    <header>
                                        <hr />
                                        <h1>Todas las quedadas disponibles</h1>
                                    </header>
                                </Col>
                                {this.state.allMeetings.map(elm => <SearchCard key={elm._id} {...elm} />)}
                            </Row>
                        </Tab>
                    </Tabs>
                    : <Loading />}
            </Container>
        )
    }

}

export default Home