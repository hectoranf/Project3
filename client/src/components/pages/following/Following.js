import React, { Component } from 'react'

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import FollowingCard from './FollowingCard'
import MediaService from './../../../service/media.service'
import Modal from 'react-bootstrap/Modal'
import FollowingForm from './FollowingForm'

import './Following.css'

class Following extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tv: [],
            movie: [],
            modalShow: false
        }
        this.MediaService = new MediaService()
    }

    handleModal = visibility => {
        this.setState({ modalShow: visibility })
    }

    setFollowingLists = () => {
        const tvArr = [], movieArr = []
        this.props.user && this.props.user.followingList.forEach(elm => elm.type === 'tv' ? tvArr.push(elm) : movieArr.push(elm))

        this.setState({ tv: tvArr.reverse(), movie: movieArr.reverse() })
    }

    componentDidMount = () => {
        this.setFollowingLists()

    }

    render() {
        return (
            <div className='following'>
                <h1>Listas de tus favoritos</h1>
                <section >
                    <header>
                        <h2>Series que sigues</h2>
                        <button onClick={() => this.handleModal(true)} className='following-button'>+</button>
                    </header>
                    {this.state.tv.length > 0 && <hr className='shadow-down' />}
                    {this.state.tv.length > 0
                        ? <Carousel
                            slidesPerPage={4}
                            slidesPerScroll={2}
                            arrows

                        >
                            {this.state.tv.map(elm => <FollowingCard key={elm._id} {...elm} />)}
                        </Carousel>
                        : <article className='msg'><p>No estás siguiendo ninguna serie</p></article>}
                    {this.state.tv.length > 0 && <hr className='shadow-up' />}
                    <br />
                </section>


                <section >
                    <header>
                        <h2>Películas que sigues</h2>
                        <button onClick={() => this.handleModal(true)} className='following-button'>+</button>
                    </header>
                    {this.state.movie.length > 0 && <hr className='shadow-down' />}
                    {this.state.movie.length > 0
                        ? <Carousel
                            slidesPerPage={4}
                            slidesPerScroll={2}
                            arrows

                        >
                            {this.state.movie.map(elm => <FollowingCard key={elm._id} {...elm} />)}
                        </Carousel>
                        : <article className='msg'><p>No estás siguiendo ninguna película</p></article>}
                    {this.state.movie.length > 0 && <hr className='shadow-up' />}
                </section>

                <Modal className='following-modal' show={this.state.modalShow} onHide={() => this.handleModal(false)} centered>
                    <Modal.Header className='shadow-down' closeButton>
                        <Modal.Title ><h4>¿Qué te apetece seguir?</h4></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FollowingForm
                            user={this.props.user}
                            setTheUser={this.props.setTheUser}
                            closeModal={() => this.handleModal(false)}
                            setFollowingLists={this.setFollowingLists}
                        />
                    </Modal.Body>
                </Modal>
            </div>

        )
    }

}

export default Following