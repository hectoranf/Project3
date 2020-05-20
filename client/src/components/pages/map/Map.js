import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.APIKey = process.env.GOOGLE_MAPS_API_KEY
    }

    state = {
        lat: 40.4167754,
        lng: -3.7037901999999576,
    }

    static defaultProps = {
        center: {
            lat: 40.4167754,
            lng: -3.7037901999999576
        },
        zoom: 16
    };

    handleDrag(e) {
        console.log(e)

    }
    render() {
        const handleApiLoaded = (map, maps) => {
            // use map and maps objects
        }
        // process.env.REACT_APP_KEY      
        return (
            < div style={{ height: '250px', width: '100%', zIndex: 0 }
            }>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: /*KEYYYYYYYYY*/ }}
                    defaultCenter={this.props.pos && this.props.pos}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    <Marker
                        lat={40.4167754}
                        lng={-3.7037901999999576}
                        text="My Marker"
                    />


                </GoogleMapReact>
            </div >
        )
    }
}