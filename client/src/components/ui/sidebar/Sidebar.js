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
            <aside className="side-bar shadow-right">
                <ul>
                    <li><img src={this.props.user.profilePic} alt={this.props.user.username} /> <p>Bienenido, {this.props.user.username}</p></li>
                    <hr />
                    <li><NavLink className="side-link" to="/" >Inicio &lt;</NavLink></li>

                    <li><NavLink className="side-link" to="/meetings" >Mis quedadas &lt;</NavLink></li>

                    <li><NavLink className="side-link" to="/following" >Siguiendo &lt;</NavLink></li>
                    <hr />
                    <li><NavLink className="side-link" to="/" onClick={this.logout} >Cerrar sesión</NavLink></li>
                </ul>
            </aside>
        )
    }

}

export default Sidebar