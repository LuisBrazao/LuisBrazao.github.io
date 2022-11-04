import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default class Cards extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img variant="top" src="images/Lost_Island_Title.png" />
              <Card.Body>
                <Card.Title>Lost Island</Card.Title>
                <Card.Text>
                  First-person platformer in which the player takes on the role
                  of a castaway in a lost island where he discovers the truth
                  about the old gods. Created using Dreams.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img variant="top" src="images/Pyramid_Scheme_Title.png" />
              <Card.Body>
                <Card.Title>Pyramid Scheme</Card.Title>
                <Card.Text>
                  Final project of my Post Graduate course. A fast-paced 2D
                  Platformer that encourages players to try and beat their
                  previous score and the score of other people. Created using
                  Dreams.
                </Card.Text>
                <Button variant="primary">
                  <Link to="/pyramid-scheme" className="links">
                    Learn More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img variant="top" src="images/Space_Runner_Title.png" />
              <Card.Body>
                <Card.Title>Space Runner (small project in Unity)</Card.Title>
                <Card.Text>2D Pixel Platformer.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Body>
                <Card.Title>Pyramid Scheme</Card.Title>
                <Card.Text>Full version of the final game in Unity</Card.Text>
                <Button variant="danger" disabled>
                  Coming Soon
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
