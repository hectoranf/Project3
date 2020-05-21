import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {}
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
            < div style={{ height: this.props.height, width: this.props.width, zIndex: 0, boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.2)' }
            }>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: /*AQUI LA API KEY */ }}
                    defaultCenter={this.props.pos && this.props.pos}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    {this.props.meetings.map((elm, idx) => <Marker
                        key={idx}
                        lat={elm.location.coordinates[0]}
                        lng={elm.location.coordinates[1]}
                    />)}



                </GoogleMapReact>
            </div >
        )
    }
}