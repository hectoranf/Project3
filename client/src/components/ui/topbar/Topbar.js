import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './Topbar.css'

class Topbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()

    }

    render() {

        return (
            <>
                <Navbar className="top-bar" fixed="top" expand="md">
                    <Navbar.Brand as="div" className="logo"><Link to="/">the<span className="bold-weight">Watch</span>men</Link></Navbar.Brand>
                    {/* <Navbar.Brand as="div" className="logo"><Link to="/"><img src="./img/logo.png" alt='logo'/></Link></Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {!this.props.user
                        ? <Nav className="ml-auto">
                            <Nav.Link as="div" className="ml-auto"><Link to="/login" >Iniciar Sesion</Link></Nav.Link>
                            <Nav.Link as="div" className="ml-auto"><Link to="/signup" >Registro</Link></Nav.Link>
                        </Nav>

                        : <nav>
                            <form onSubmit={this.handleSubmit}>
                                <input type="search"></input>
                                <button className='form-button'>Search</button>
                            </form>
                            <NavLink className="form-button" to="/meeting/create" >Crea una quedada</NavLink>
                        </nav>

                    }
                </Navbar>

            </>
        )
    }

}

export default Topbar