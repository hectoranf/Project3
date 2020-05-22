import React from 'react'

import Col from 'react-bootstrap/Col'


const Message = props => {
    return (

        <Col md='12'>
            <article className='meeting-message' style={{ padding: 0 }}>

                {props.userId !== props.user._id && <figure className='red'>
                    <img className='user' src={props.user.profilePic} alt={props.user.username} />
                    <p>{props.user.username}</p>
                </figure>}

                <div className='text'>
                    <p>{props.text}</p>
                </div>
                {props.userId === props.user._id && <figure >
                    <img className='user' src={props.user.profilePic} alt={props.user.username} />
                    <p>{props.user.username}</p>
                </figure>}
            </article>
        </Col>

    )

}

export default Message