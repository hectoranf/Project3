import React, { Component } from 'react'

import MediaService from './../../../../service/media.service'
import MeetingService from './../../../../service/meeting.service'

import './CreateMeetingForm.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

class CreateMeetingForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            meeting: {
                meetingName: '',
                media: {
                    title: '',
                    type: '',
                    idTMDB: '',
                    posterPic: ''
                },
                date: new Date(),
                description: '',
                seats: '',
                freeSeats: '',
                creator: '',
                location: {
                    type: '',
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

    handleInputChange = e => {
        let meetingCopy = { ...this.state.meeting }
        meetingCopy[e.target.name] = e.target.value
        this.setState({
            meeting: meetingCopy
        })
    }

    handleResultsVisibility = visibility => {
        this.setState({ ...this.state, resultVisibility: visibility })
    }

    handleMouseOver = status => {
        this.setState({ ...this.state, mouseIsOver: status })
    }

    setMedia = (media, e) => {

        let mediaAux = {
            title: '',
            type: media.media_type,
            idTMDB: media.id,
            posterPic: media.poster_path
        }
        mediaAux.type === 'tv' ? mediaAux.title = media.name : mediaAux.title = media.title

        let meetingCopy = { ...this.state.meeting }
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

    handleFormSubmit = e => {
        e.preventDefault()
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
                                    {this.state.results.map((elm, idx) => <li key={idx} onClick={e => this.setMedia(elm, e)}>
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

                            <Form.Group controlId="freeSeats" md="3">
                                <Form.Label>¿Cuantos invitados quieres que asistan?</Form.Label>
                                <Form.Control
                                    name="freeSeats"
                                    type="number"
                                    onChange={this.handleInputChange}
                                    value={this.state.meeting.freeSeats}
                                    autoComplete="off" />
                            </Form.Group>

                            <Form.Group controlId="date" md="3">
                                <Form.Label>¿Cuantos invitados quieres que asistan?</Form.Label>
                                <Form.Control
                                    name="date"
                                    type="datetime-local"
                                    onChange={this.handleInputChange}
                                    value={this.state.meeting.date}
                                    autoComplete="off" />
                            </Form.Group>

                            <Form.Group controlId="location">
                                <Form.Label>¿Dónde va a ser la quedada?</Form.Label>
                                <Form.Control as="select" custom>
                                    {this.props.user && this.props.user.places.map(elm => <option key={elm._id}>{elm.name}</option>)}
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