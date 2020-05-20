import React from 'react'
import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import './MeetingSearchCard.css'


const MeetingSearchCard = props => {
    return (

        <Col md={{ span: 10, offset: 1 }} as='article'>
            <Link to={`meeting/details/${props._id}`} className="search-card">
                <figure >
                    <img src={props.media.posterPic ? `http://image.tmdb.org/t/p/w154${props.media.posterPic}` : './img/poster/defaultPoster.jpg'} alt={props.media.title} />
                    <h2>{props.media.title}</h2>
                </figure>
                <div>
                    <header>
                        <h1>{props.meetingName}</h1>
                        <hr />
                        <p><span className='regular-weight'>Fecha</span>: {`${props.date.getDate()} - ${props.date.getMonth() + 1} - ${props.date.getFullYear()}`}</p>
                        <p><span className='regular-weight'>Hora</span>: {props.date.getHours()}:{props.date.getMinutes() < 10 ? `0${props.date.getMinutes()}` : props.date.getMinutes()}</p>
                        <p><span className='regular-weight'>Lugares disponibles</span>: {props.freeSeats}</p>
                    </header>
                </div>
                <figure>
                    <img className='avatar' src={props.creator.profilePic} alt={props.creator.username} />
                    <h2>{props.creator.username}</h2>
                </figure>
            </Link>

        </Col>
    )

}

export default MeetingSearchCard