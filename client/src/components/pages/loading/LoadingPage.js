import React from 'react'
import Spinner from 'react-bootstrap/Spinner'


const Loading = props => {
    return (
        <figure className='spinner'>
            <Spinner animation="border" variant="danger" />
        </figure>
    )
}

export default Loading