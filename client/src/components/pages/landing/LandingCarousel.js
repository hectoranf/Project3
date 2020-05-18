import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const LandingCarousel = () => {
    return (

        <Carousel as="section" className="landing-carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./img/landing/landing1.jpeg'
                    alt='Landing Carrousel img'
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./img/landing/landing2.jpeg'
                    alt='Landing Carrousel img'
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./img/landing/landing3.jpeg'
                    alt='Landing Carrousel img'
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default LandingCarousel