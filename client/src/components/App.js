import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

// import AuthService from './../service/auth.service'
import Topbar from './ui/topbar/Topbar'
import Landing from './pages/landing/Landing'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Sidebar from './ui/sidebar/Sidebar.js'
import MeetingDetails from './pages/meeting/MeetingDetails'
import Following from './pages/following/Following'
import MeetingForm from './pages/meeting/create/CreateMeetingForm'

import AuthService from './../service/auth.service'


class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authService = new AuthService()
  }

  setTheUser = userObj => this.setState({ loggedInUser: userObj }, () => console.log('El estado de App ha cambiado:', this.state))

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.authService.isLoggedIn()
        .then(response => this.setTheUser(response.data))
        .catch(() => this.setTheUser(false))
    }
  }

  render() {

    this.fetchUser()

    return (
      <>
        <Topbar user={this.state.loggedInUser} />
        {this.state.loggedInUser && <Sidebar user={this.state.loggedInUser} setTheUser={this.setTheUser} />}

        <main style={{ marginLeft: this.state.loggedInUser && '250px' }}>
          <Switch>
            <Route path="/" exact render={() => this.state.loggedInUser ? <Home user={this.state.loggedInUser} /> : <Landing />} />
            <Route path="/signup" render={props => <Signup {...props} setTheUser={this.setTheUser} />} />
            <Route path="/login" render={props => <Login {...props} setTheUser={this.setTheUser} />} />

            <Route path="/meeting/details/:id" render={props => this.state.loggedInUser
              ? <MeetingDetails {...props} user={this.state.loggedInUser} setTheUser={this.setTheUser} />
              : <Redirect to='/' />} />

            <Route path="/following" render={props => this.state.loggedInUser
              ? <Following {...props} user={this.state.loggedInUser} setTheUser={this.setTheUser} />
              : <Redirect to='/' />} />

            <Route path="/meeting/create" render={props => this.state.loggedInUser
              ? <MeetingForm {...props} user={this.state.loggedInUser} setTheUser={this.setTheUser} />
              : <Redirect to='/' />} />

          </Switch>

        </main>

      </>
    )
  }
}

export default App
