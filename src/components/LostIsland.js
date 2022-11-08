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
                    src="images/Level_LI.png"
                    alt="Third slide"
                    width="560"
                    height="315"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="images/Start_Level_LI.png"
                    alt="Third slide"
                    width="560"
                    height="315"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/OA29Kf_DSGI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
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
