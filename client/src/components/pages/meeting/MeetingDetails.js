import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import meetingService from './../../../service/meeting.service'
import './MeetingDetails.css'

class MeetingDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            meeting: null
        }
        this.meetingService = new meetingService()
    }

    getMeeting = id => {
        this.meetingService.getById(id)
            .then(response => {
                const date = new Date(response.data.date)
                response.data.date = date
                this.setState({ meeting: response.data })
            })
            .catch(err => console.log(err))
    }

    joinMeeting = () => {
        this.meetingService.joinMeeting(this.state.meeting._id)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getMeeting(this.props.match.params.id)

    }
    render() {
        console.log('los props', this.props)

        return (
            <Container fluid className="meeting-details" >
                {this.state.meeting &&
                    <Row as='section' >
                        <Col lg={{ span: 2, offset: 0 }}>
                            <div className='poster'>
                                <img src={this.state.meeting.media.posterPic ? `http://image.tmdb.org/t/p/w154${this.state.meeting.media.posterPic}` : 'https://res.cloudinary.com/dba5fn3ws/image/upload/v1589985020/PosterDefault/defaultPoster_esgqhh.jpg'} alt={this.state.meeting.media.title} />
                            </div>
                        </Col>
                        <Col lg={{ span: 10, offset: 0 }}>
                            <h2>{this.state.meeting.media.title}</h2>
                            <h1>{this.state.meeting.meetingName}</h1>
                            {(!this.props.user.joinedMeetings.includes(this.state.meeting._id) && this.state.meeting.freeSeats > 0) && <button onClick={this.joinMeeting} className='form-button'>Apúntate a esta quedada</button>}
                        </Col>
                        <Col lg={2}>
                            <div className='avatar' >
                                <img src={this.state.meeting.creator.profilePic} alt={this.state.meeting.creator.username} />
                                <h3 className='username'>{this.state.meeting.creator.username}</h3>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <Row>
                                <Col as='article' lg={12}>
                                    <header>
                                        <h3>Descripción</h3>
                                    </header>
                                    <p>{this.state.meeting.description}</p>
                                    <hr />
                                </Col>
                                <Col as='article' lg={12}>
                                    <header>
                                        <h3>Invitados</h3>
                                    </header>
                                    <div className='participants'>
                                        {this.state.meeting.participants.map(elm => <div key={elm._id}><img src={elm.profilePic} alt={elm.username} /> <h4>{elm.username}</h4></div>)}

                                    </div>
                                    <hr />
                                </Col>
                                <Col as='article' lg={12}>
                                    <header>
                                        <h3>Lista de la compra</h3>
                                    </header>

                                </Col>
                            </Row>
                        </Col>
                        <Col lg={1} className='separation'>
                            <div ></div>
                        </Col>
                        <Col lg={4}>
                            <Row>
                                <Col lg={12} as='article'>
                                    <header>
                                        <h3>Datos</h3>
                                    </header>
                                    <p><span className='regular-weight'>Fecha</span>: {`${this.state.meeting.date.getDate()} - ${this.state.meeting.date.getMonth() + 1} - ${this.state.meeting.date.getFullYear()}`}</p>
                                    <p><span className='regular-weight'>Hora</span>: {this.state.meeting.date.getHours()} : {this.state.meeting.date.getMinutes() < 10 ? `0${this.state.meeting.date.getMinutes()}` : this.state.meeting.date.getMinutes()}</p>
                                    <p><span className='regular-weight'>Sitios libres</span>: {this.state.meeting.freeSeats}</p>
                                    <hr />
                                </Col>
                                <Col as='article' lg={12}>
                                    <header>
                                        <h3>Localización</h3>
                                    </header>
                                    <hr />
                                </Col>
                                <Col as='article' lg={12}>
                                </Col>
                            </Row>
                        </Col>
                    </Row>}
                <hr />
            </Container>
        )
    }

}

export default MeetingDetails