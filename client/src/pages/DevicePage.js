import React from 'react';
import { Col, Row, Container, Image, Card, Button } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'Iphone 12 pro',
    price: 25000,
    rating: 5,
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000',
  };
  const description = [
    { id: 1, title: 'Random Access Memory', description: '5 GB' },
    { id: 2, title: 'Camera', description: '12 MP' },
    { id: 3, title: 'Processor', description: 'Pentium 3' },
    { id: 4, title: 'Battery', description: '4000' },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
          >
            <h3>From: {device.price} RUB</h3>
            <Button variant={'outline-dark'}>Add to cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Info:</h1>
        {description.map((info, index) => (
          <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
