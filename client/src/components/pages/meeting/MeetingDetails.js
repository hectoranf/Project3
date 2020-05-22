import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Map from './../map/Map'
import Form from 'react-bootstrap/Form'

import Message from './Message'
import meetingService from './../../../service/meeting.service'
import './MeetingDetails.css'



class MeetingDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            meeting: null,
            msg: ''
        }
        this.meetingService = new meetingService()
    }

    getMeeting = id => {
        this.meetingService.getById(id)
            .then(response => {
                const date = new Date(response.data.date)
                response.data.date = date
                response.data.messages.reverse()
                this.setState({ meeting: response.data, msg: '' })
            })
            .catch(err => console.log(err))
    }

    joinMeeting = () => {
        this.meetingService.joinMeeting(this.state.meeting._id)
            .then(response => {
                this.props.setTheUser(response.data)
                this.getMeeting(this.state.meeting._id)
            })
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.msg) {
            this.meetingService.postMessage(this.state.meeting._id, { user: this.props.user._id, text: this.state.msg })
                .then(response => this.getMeeting(this.state.meeting._id))
                .catch(err => console.log(err))
        }
    }

    componentDidMount = () => {
        this.getMeeting(this.props.match.params.id)
    }

    render() {

        return (
            <Container fluid className="meeting-details" >
                {this.state.meeting &&
                    <>
                        <Row as='section' >
                            <Col lg={{ span: 2, offset: 0 }}>
                                <div className='poster'>
                                    <img src={this.state.meeting.media.posterPic ? `http://image.tmdb.org/t/p/w154${this.state.meeting.media.posterPic}` : 'https://res.cloudinary.com/dba5fn3ws/image/upload/v1589985020/PosterDefault/defaultPoster_esgqhh.jpg'} alt={this.state.meeting.media.title} />
                                </div>
                            </Col>
                            <Col lg={{ span: 10, offset: 0 }}>
                                <h2>{this.state.meeting.media.title}</h2>
                                <h1>{this.state.meeting.meetingName}</h1>
                                <br />
                                {(!this.props.user.joinedMeetings.includes(this.state.meeting._id)
                                    && this.state.meeting.freeSeats > 0
                                    && !this.props.user.createdMeetings.includes(this.state.meeting._id))
                                    && <button onClick={this.joinMeeting} className='form-button'>Apúntate a esta quedada</button>}
                            </Col>
                            <Col lg={2}>
                                <div className='avatar' >
                                    <img src={this.state.meeting.creator.profilePic} alt={this.state.meeting.creator.username} />
                                    <h3 className='username'>{this.state.meeting.creator.username}</h3>
                                </div>
                            </Col>
                            <Col lg={4}>
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
                                </Row>
                            </Col>
                            <Col lg={1} className='separation'>
                                <div ></div>
                            </Col>
                            <Col lg={5}>
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
                                        <Map
                                            pos={this.state.meeting.location.coordinates}
                                            zoom={16}
                                            meetings={[this.state.meeting]}
                                            width={'100%'}
                                            height={'250px'}
                                            marker={true}
                                        />
                                        <br />
                                        <hr />
                                    </Col>
                                    <Col as='article' lg={12}>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        {(this.props.user.joinedMeetings.includes(this.state.meeting._id)
                            || this.props.user.createdMeetings.includes(this.state.meeting._id))
                            && <Row as='section'>
                                <Col md={{ span: 10, offset: 1 }}>
                                    <header>
                                        <h3>Mensajes</h3>
                                    </header>
                                    <br />
                                    <Form className="form-style" onSubmit={this.handleSubmit}>

                                        <Form.Group controlId="name">
                                            <Form.Control as='textarea' placeholder='Escribe un comentario...' rows='3' name="msg" type="text" value={this.state.msg} onChange={this.handleInputChange} />
                                        </Form.Group>
                                        <button className="form-button" type="submit">Enviar</button>
                                        <br />
                                        <br />
                                        {this.state.meeting.messages.map((elm, idx) => <Message key={idx} {...elm} userId={this.props.user._id} />)}
                                    </Form>

                                </Col>

                            </Row>}
                    </>
                }
            </Container>
        )
    }

}

export default MeetingDetails