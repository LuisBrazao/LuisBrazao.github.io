import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

export default class LostIsland extends Component {
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
                    src="images/Lost_Island_Title.png"
                    alt="Second slide"
                    width="560"
                    height="315"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="images/Lost_Island_Title.png"
                    alt="Third slide"
                    width="560"
                    height="315"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
