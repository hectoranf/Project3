import React, { Component } from 'react'

import MediaService from './../../../../service/media.service'
import MeetingService from './../../../../service/meeting.service'

import './CreateMeetingForm.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class CreateMeetingForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            meeting: {
                meetingName: '',
                media: {
                    title: '',
                    type: 'tv',
                    idTMDB: 1,
                    posterPic: ''
                },
                date: new Date(),
                description: '',
                seats: '',
                freeSeats: 1,
                creator: '',
                location: {
                    type: 'Point',
                    coordinates: []
                },
                snackList: []
            },
            results: [],
            resultVisibility: 'none',
            mouseIsOver: 'false',
            searchInput: ''
        }
        this.mediaService = new MediaService()
        this.meetingService = new MeetingService()
    }

    createMeeting = () => {
        this.meetingService.createMeeting(this.state.meeting)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        let meetingCopy = { ...this.state.meeting }
        meetingCopy[e.target.name] = e.target.value
        this.setState({
            meeting: meetingCopy
        })
    }

    handleResultsVisibility = visibility => this.setState({ ...this.state, resultVisibility: visibility })

    handleMouseOver = status => this.setState({ ...this.state, mouseIsOver: status })

    setMedia = (media) => {

        let mediaAux = {
            title: '',
            type: media.media_type,
            idTMDB: media.id,
            posterPic: media.poster_path
        }
        mediaAux.type === 'tv' ? mediaAux.title = media.name : mediaAux.title = media.title

        let meetingCopy = { ...this.state.meeting, media: mediaAux }
        document.getElementById('media-title').value = mediaAux.title
        this.setState({ meeting: meetingCopy, resultVisibility: 'none' })
    }

    handleSearch = e => {
        const value = e.target.value
        if (value.length > 0) {
            this.handleResultsVisibility('block')
            this.mediaService.getAll(value)
                .then(response => {
                    this.setState({ ...this.state, searchInput: value, results: response.data.results.filter(elm => (elm.media_type === 'tv' || elm.media_type === 'movie')) })
                })
                .catch(err => console.log(err))
        } else {
            this.handleResultsVisibility('none')
            this.setState({ ...this.state, searchInput: value, results: [] })
        }
    }

    handleDate = date => {
        let meetingCopy = { ...this.state.meeting }
        meetingCopy.date = date
        this.setState({ meeting: meetingCopy })
    }

    handleLocation = e => {
        const locationAux = this.props.user.places[e.target.value].location
        let meetingCopy = { ...this.state.meeting, location: locationAux }
        this.setState({ meeting: meetingCopy })
    }

    handleSubmit = e => {
        e.preventDefault()
        let meetingCopy = { ...this.state.meeting, creator: this.props.user._id, seats: this.state.meeting.freeSeats }
        if (meetingCopy.location.coordinates.length !== 2) meetingCopy.location.coordinates = this.props.user.places[0].location.coordinates
        if (!meetingCopy.media.title) meetingCopy.media.title = this.state.searchInput
        this.setState({ meeting: meetingCopy }, () => this.createMeeting())
    }

    render() {
        return (

            <Container className='creating-meeting'>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1>Datos de la quedada</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group controlId="media-title"
                                onBlur={() => !this.state.mouseIsOver && this.handleResultsVisibility('none')}
                                onFocus={() => this.handleResultsVisibility('block')}>
                                <Form.Label>¿Qué vais a ver?</Form.Label>
                                <Form.Control name="media-title"
                                    type="text"
                                    placeholder='Titulo...'
                                    onChange={this.handleSearch}
                                    autoComplete="off"
                                    required />

                                <ul onMouseOver={() => this.handleMouseOver(true)} onMouseOut={() => this.handleMouseOver(false)} className='search-results' style={{ display: this.state.resultVisibility }}>
                                    {this.state.results.map((elm, idx) => <li key={idx} onClick={() => this.setMedia(elm)}>
                                        {elm.poster_path && <img className='miniature' src={`http://image.tmdb.org/t/p/w92${elm.poster_path}`} alt='poster' />}
                                        <p>{elm.media_type === 'tv' ? elm.name : elm.title}</p>
                                    </li>)}
                                </ul>
                            </Form.Group>

                            <Form.Group controlId="meetingName">
                                <Form.Label>Pon nombre a tu quedada</Form.Label>
                                <Form.Control
                                    placeholder='Ej: maratón de F·R·I·E·N·D·S'
                                    name="meetingName"
                                    type="textField"
                                    onChange={this.handleInputChange}
                                    value={this.state.meeting.meetingName}
                                    autoComplete="off" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="freeSeats" md="6">
                                    <Form.Label>¿Cuantos invitados quieres que asistan?</Form.Label>
                                    <Form.Control
                                        name="freeSeats"
                                        type="number"
                                        onChange={this.handleInputChange}
                                        value={this.state.meeting.freeSeats}
                                        autoComplete="off" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="date" md='6'>
                                    <Form.Label>¿Cuándo va a ser?</Form.Label>
                                    <br />
                                    <DatePicker
                                        className='form-date'
                                        showTimeSelect
                                        selected={this.state.meeting.date}
                                        onChange={date => this.handleDate(date)}
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="time"
                                        dateFormat="yyyy/MM/dd hh:mm aa"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="desc">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as='textarea'
                                    placeholder='Da a tus invitados una idea de cómo va a ser la quedada'
                                    name="description"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.meeting.description}
                                    autoComplete="off" />
                            </Form.Group>

                            <Form.Group controlId="location">
                                <Form.Label>¿Dónde va a ser la quedada?</Form.Label>
                                <Form.Control as="select" onChange={this.handleLocation} custom>
                                    <option value='0'>...</option>
                                    {this.props.user && this.props.user.places.map((elm, idx) => <option key={elm._id} value={idx}>{elm.name}</option>)}
                                </Form.Control>
                            </Form.Group>

                            <hr />
                            <button className="form-button" type="submit">Crea tu quedada</button>
                        </Form>
                    </Col>
                </Row>

            </Container >

        )
    }

}

export default CreateMeetingForm