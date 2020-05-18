import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'
import { NavLink } from 'react-router-dom'

import './Sidebar.css'

class Sidebar extends Component {

    constructor() {
        super()
        this.state = {
        }
        this.authService = new AuthService()
    }

    logout = () => {
        this.props.setTheUser(false)
        this.authService.logout()
    }

    render() {
        return (
            <>
                <aside className="side-bar">
                    <ul>
                        <li><img src={this.props.user.profilePic} alt={this.props.user.username} /> {this.props.user.username}</li>
                        <hr />
                        <li><NavLink className="side-link" to="/" >Quedadas</NavLink></li>
                        <li><NavLink className="side-link" to="/" >Favoritos</NavLink></li>
                        <li><NavLink className="side-link" to="/" >Mensajes</NavLink></li>
                        <hr />
                        <li><NavLink className="side-link" to="/" onClick={this.logout} >Cerrar sesión</NavLink></li>
                    </ul>
                </aside>


            </>
        )
    }

}

export default Sidebar