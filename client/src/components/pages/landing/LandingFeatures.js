import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const LandingFeatures = () => {
    return (
        <Container as="section"  >
            <Row >
                <Col xl={3} lg={6}>
                    <Card as="article">
                        <Card.Img variant="top" src="https://static.javatpoint.com/images/core/java-features.png" />
                        <Card.Body>
                            <Card.Title>Prueba</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                    </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} lg={6}>
                    <Card as="article">
                        <Card.Img variant="top" src="https://static.javatpoint.com/images/core/java-features.png" />
                        <Card.Body>
                            <Card.Title>Prueba</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                    </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} lg={6}>
                    <Card as="article">
                        <Card.Img variant="top" src="https://static.javatpoint.com/images/core/java-features.png" />
                        <Card.Body>
                            <Card.Title>Prueba</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                    </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} lg={6}>
                    <Card as="article">
                        <Card.Img variant="top" src="https://static.javatpoint.com/images/core/java-features.png" />
                        <Card.Body>
                            <Card.Title>Prueba</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                    </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingFeatures