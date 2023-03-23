import React from "react";

import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const styles = {
    cardImage: {
        width: '20vw',
        height: '20vh'
    },
    card: {
    }
}

const RestaurantList = () => {
    return (
        <Container>
            <Card style={styles.card} className="border-0 mt-3">
                <Row>
                    <Col md="auto">
                        <Card.Img src="https://s3-media2.fl.yelpcdn.com/bphoto/HSZTFoGZ_DFMv3hNQSYcBQ/o.jpg" style={styles.cardImage}/>
                    </Col>
                    <Col xs={8}>
                        <Card.Body>
                            <Card.Text>Hi</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <Card style={styles.card} className="border-0 mt-3">
                <Row>
                    <Col md="auto">
                        <Card.Img src="https://s3-media2.fl.yelpcdn.com/bphoto/_p47GnNslB4aYip8BWT2AQ/o.jpg" style={styles.cardImage}/>
                    </Col>
                    <Col xs={8}>
                        <Card.Body>
                            <Card.Text>Hi</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
            
    )
}

export default RestaurantList