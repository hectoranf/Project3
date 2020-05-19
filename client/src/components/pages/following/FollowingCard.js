import React from 'react'

const MeetingSearchCard = props => {


    return (
        <article className="card">
            <img src={`http://image.tmdb.org/t/p/w185${props.posterPic}`} alt={props.title} />
            <p>{props.title}</p>
        </article>
    )


}

export default MeetingSearchCard