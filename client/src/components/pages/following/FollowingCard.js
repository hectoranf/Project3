import React from 'react'

const MeetingSearchCard = props => {


    return (
        <article className="card">
            <img src={props.posterPic
                ? `http://image.tmdb.org/t/p/w185${props.posterPic}`
                : './img/poster/defaultPoster.jpg'}
                alt={props.title}
            />
            <p>{props.title}</p>
        </article>
    )


}

export default MeetingSearchCard