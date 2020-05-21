import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

import MediaService from './../../../service/media.service'
import UserService from './../../../service/user.service'

class FollowingForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            media: {
                title: '',
                type: 'tv',
                idTMDB: 0,
                posterPic: ''
            },
            results: [],
            resultVisibility: 'none',
            mouseIsOver: 'false',
            searchInput: '',
            msg: ''
        }
        this.mediaService = new MediaService()
        this.userService = new UserService()
    }


    handleInputChange = e => {
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

        document.getElementById('media-title').value = mediaAux.title
        this.setState({ media: mediaAux, resultVisibility: 'none' })
    }

    followContent = () => {
        this.userService.follow(this.state.media)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.setFollowingLists()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.user.followingList.filter((elm => elm.type === this.state.media.type && elm.idTMDB === this.state.media.idTMDB)).length
            ? this.setState({ msg: 'Ya sigues ese contenido' })
            : this.followContent()

    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <br />
                    <Form.Group controlId="media-title"
                        onBlur={() => !this.state.mouseIsOver && this.handleResultsVisibility('none')}
                        onFocus={() => this.handleResultsVisibility('block')}>

                        <Form.Control name="media-title"
                            type="text"
                            placeholder='Titulo...'
                            onChange={this.handleInputChange}
                            autoComplete="off"
                            required />

                        <ul onMouseOver={() => this.handleMouseOver(true)}
                            onMouseOut={() => this.handleMouseOver(false)}
                            className='search-results'
                            style={{ display: this.state.resultVisibility }}
                        >
                            {this.state.results.map((elm, idx) =>
                                <li key={idx} onClick={() => this.setMedia(elm)}>
                                    {elm.poster_path && <img className='miniature' src={`http://image.tmdb.org/t/p/w92${elm.poster_path}`} alt='poster' />}
                                    <p>{elm.media_type === 'tv' ? elm.name : elm.title}</p>
                                </li>)}
                        </ul>
                    </Form.Group>
                    <hr />
                    <p className={this.state.msg && 'form-button'}>{this.state.msg}</p>
                    {this.state.media.title
                        && <article>
                            <img src={this.state.media.posterPic
                                ? `http://image.tmdb.org/t/p/w185${this.state.media.posterPic}`
                                : './img/poster/defaultPoster.jpg'}
                                alt={this.state.media.title}
                            />
                            <p>{this.state.media.title}</p>
                            <hr />
                        </article>}

                    <button className='form-button' type="submit">Seguir</button>
                </Form>
            </Container>
        )
    }
}

export default FollowingForm