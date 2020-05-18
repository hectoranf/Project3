import React from 'react'
import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import './MeetingSearchCard.css'


const MeetingSearchCard = props => {

    const date = new Date(Date.parse(props.date))
    return (

        <Col md={{ span: 10, offset: 1 }} as='article'>
            <Link to={`meeting/details/${props._id}`} className="search-card">
                <figure >
                    <img src={`http://image.tmdb.org/t/p/w154${props.media.posterPic}`} alt={props.media.title} />
                    <h2>{props.media.title}</h2>
                </figure>
                <div>
                    <header>
                        <h1>{props.meetingName}</h1>
                        <p><span>Fecha</span>: {`${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`}</p>
                        <p><span>Hora</span>: {date.getHours()}:{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}</p>
                        <p><span>Lugares disponibles</span>: {props.freeSeats}</p>
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