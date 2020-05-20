import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import AuthService from './../../../service/auth.service'
import FileService from './../../../service/file.service'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                username: '',
                password: '',
                email: '',
                profilePic: ''
            },
            errorMessage: ''
        }
        this.authService = new AuthService()
        this.filesService = new FileService()
    }

    handleInputChange = e => {

        let userInfoCopy = { ...this.state.userInfo }
        const { name, value } = e.target
        userInfoCopy = { ...userInfoCopy, [name]: value }

        this.setState({ userInfo: userInfoCopy })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.authService.signup(this.state.userInfo)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => {
                err.response.status === 400 && this.setState({ errorMessage: err.response.data.message })
            })
    }

    handleFileUpload = e => {

        const uploadData = new FormData()
        uploadData.append("profilePic", e.target.files[0])
        this.filesService.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.data.secure_url)
                let userInfoCopy = { ...this.state.userInfo }
                userInfoCopy = { ...userInfoCopy, profilePic: response.data.secure_url }
                this.setState({ userInfo: userInfoCopy })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (

            <Container>

                <Form className="form-style" onSubmit={this.handleSubmit}>

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <h3 className="form-title">Registro de usuario</h3>
                            <hr></hr>

                            <Form.Group controlId="name">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="mail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" value={this.state.email} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="pwd">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="img">
                                <Form.Label>Imagen de perfil</Form.Label>
                                <Form.Control name="profilePic" type="file" onChange={this.handleFileUpload} />
                            </Form.Group>

                            <p
                                className='error-message'
                                style={{ display: this.state.errorMessage ? 'block' : 'none' }}
                            >{this.state.errorMessage}</p>
                            <hr></hr>
                            <button className="form-button" type="submit">Registrarme</button>

                            <p><small>¿Ya tienes cuenta? <Link to="/login" className="link-form">Inicia sesión</Link></small></p>

                        </Col>
                    </Row>
                </Form>

            </Container>

        )
    }

}

export default Signup