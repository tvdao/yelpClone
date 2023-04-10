import React, { useEffect, useContext } from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const styles = {
  cardImage: {
    width: '20vw',
    height: '20vh',
  },
  card: {},
};

const RestaurantList = () => {
  const { restaurant } = useContext(RestaurantsContext);
  const [restaurantList, setRestaurantList] = restaurant;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get('/');
        if (response.status === 200) {
          setRestaurantList(response.data.data.restaurant);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      {restaurantList !== undefined &&
        restaurantList.map((item, index) => (
          <Card style={styles.card} className="border-0 mt-3" key={index}>
            <Row>
              <Col md="auto">
                <Card.Img src={item.image_url} style={styles.cardImage} />
              </Col>
              <Col xs={8}>
                <Card.Body>
                  <Card.Text>{item.name}</Card.Text>
                  <Card.Text>{item.address + ' ' + item.zip}</Card.Text>
                  <Card.Text>{item.price}</Card.Text>
                  <Card.Text>{'Rating: ' + item.rating + '/' + '5'}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
    </Container>
  );
};

export default RestaurantList;
