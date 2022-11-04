import React, { Component } from "react";
import Cards from "./Cards";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaReact,
  FaUnity,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaPlaystation,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript, DiMongodb, DiMysql } from "react-icons/di";
import { SiCsharp } from "react-icons/si";
import { MDBFooter, MDBIcon } from "mdb-react-ui-kit";

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
            <h1>
              Hi! I'm Luís. I am {this.state.age} years old and I'm an aspiring
              Game Programmer/Designer
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center cards-div">
            <h2>Projects</h2>
            <Cards />
          </Col>
        </Row>
        <Row>
          <Col className="text-center background-div">
            <h2>Background</h2>
            <h3>Education</h3>
            <ul>
              <li>
                Bachelors degree, Information Technology, Faculdade de Ciências
                da Universidade de Lisboa
              </li>
              <li>Web Development Bootcamp Ironhack</li>
              <li>Postgraduate degree, Game Design, IADE</li>
              <li>Game Design course in Coursera</li>
            </ul>
            <h3>Experience</h3>
            <ul>
              <li>
                Teacher Assistant, Ironhack, Full-Time, Jan 2021 - May 2021
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center skills-div">
            <h3>Skills</h3>
            <h3>Programming Languages</h3>
            <ul>
              <li>
                Javascript <DiJavascript />
              </li>
              <li>
                Python <FaPython />
              </li>
              <li>
                Java <FaJava />
              </li>
              <li>
                HTML/CSS <FaHtml5 />
                <FaCss3Alt />
              </li>
              <li>
                C# <SiCsharp />
              </li>
              <li>
                PHP <FaPhp />
              </li>
            </ul>
            <h3>Game Engines</h3>
            <ul>
              <li>
                Unity <FaUnity />
              </li>
              <li>
                Dreams PS4 <FaPlaystation />
              </li>
            </ul>
            <h3>Libraries and Framworks</h3>
            <ul>
              <li>
                React.js <FaReact />
              </li>
              <li>
                Node.js <FaNodeJs />
              </li>
              <li>Express.js</li>
              <li>
                Bootstrap.js <FaBootstrap />
              </li>
            </ul>
            <h4>Backend</h4>
            <ul>
              <li>
                MongoDB <DiMongodb />
              </li>
              <li>
                MySQL <DiMysql />
              </li>
            </ul>
          </Col>
        </Row>
        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-muted fixed-bottom"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a
                href="https://www.instagram.com/luismarsil/"
                className="me-4 text-reset"
                target="_blank"
                rel="noreferrer"
              >
                <MDBIcon fab icon="instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/lu%C3%ADs-braz%C3%A3o/"
                className="me-4 text-reset"
                target="_blank"
                rel="noreferrer"
              >
                <MDBIcon fab icon="linkedin" />
              </a>
            </div>
          </section>
        </MDBFooter>
      </Container>
    );
  }
}
