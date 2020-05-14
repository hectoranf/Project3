import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// import AuthService from './../service/auth.service'
import Meeting from './Meeting'

class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {

    return (
      <>
        <h1>Hola</h1>
        <Meeting />
      </>
    )
  }
}

export default App
