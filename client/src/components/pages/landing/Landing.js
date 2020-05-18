import React, { Component } from 'react'
import Carousel from './LandingCarousel'
import Features from './LandingFeatures'

import './Landing.css'

class Landing extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div >
                <Carousel />
                <Features />
            </div>
        )
    }

}

export default Landing