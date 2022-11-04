import React, { Component } from "react";
import Cards from "./Cards";
import { Container, Row, Col } from "react-bootstrap";

let d = "20000420";
let birthday = +new Date(d.substr(0, 4), d.substr(4, 2) - 1, d.substr(6, 2));
let age = ~~((Date.now() - birthday) / 31557600000);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age,
    };
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="text-center main-part">
            <h2>
              Hi! I'm Luís. I am {this.state.age} years old and I'm an aspiring
              Game Programmer/Designer
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className="text-center cards-div">
            <h3>Projects</h3>
            <Cards />
          </Col>
        </Row>
        <Row>
          <Col className="text-left background-div">
            <h3>Background</h3>
            <h4>Education</h4>
            <ul>
              <li>
                Bachelors degree, Information Technology, Faculdade de Ciências
                da Universidade de Lisboa
              </li>
              <li>Web Development Bootcamp Ironhack</li>
              <li>Postgraduate degree, Game Design, IADE</li>
              <li>Game Design course in Coursera</li>
            </ul>
            <h4>Experience</h4>
            <ul>
              <li>
                Teacher Assistant, Ironhack, Full-Time, Jan 2021 - May 2021
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-left skills-div">
            <h3>Skills</h3>
            <h4>Programming Languages</h4>
            <ul>
              <li>Javascript</li>
              <li>Python</li>
              <li>Java</li>
              <li>HTML/CSS</li>
              <li>C#</li>
              <li>PHP</li>
            </ul>
            <h4>Libraries and Framworks</h4>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Bootstrap.js</li>
            </ul>
            <h4>Backend</h4>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
            <h4>Game Engines</h4>
            <ul>
              <li>Unity</li>
              <li>Dreams PS4</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}
