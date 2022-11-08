import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class PyramidScheme extends Component {
  render() {
    return (
      <div className="text-center">
        <Container fluid style={{ width: "100%" }}>
          <Row>
            <Col className="d-flex justify-content-center text-center">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="images/Pyramid_Scheme_Title.png"
                    alt="Second slide"
                    width="560"
                    height="315"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/v9MQfvAX60Y"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
