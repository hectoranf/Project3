import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const LandingCarousel = () => {
    return (

        <Carousel as="section" className="landing-carousel bold-weight">
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src='./img/landing/landing1.jpg'
                    alt='Landing Carrousel img'
                />
                <Carousel.Caption >
                    <h3 >Comparte tu sofá</h3>
                    <p>Porque no hay nada más tirste que reirte o llorar solo</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./img/landing/landing2.jpeg'
                    alt='Landing Carrousel img'
                />
                <Carousel.Caption>
                    <h3>Monta quedadas en tu casa</h3>
                    <p>Maratones de trílogías, especiales de navidad, o un evento de fin de temporada</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./img/landing/landing3.jpeg'
                    alt='Landing Carrousel img'
                />
                <Carousel.Caption>
                    <h3>Haz nuevas amistades</h3>
                    <p>Conoce gente con gustos afines con quien compartit tus series favortias</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default LandingCarousel