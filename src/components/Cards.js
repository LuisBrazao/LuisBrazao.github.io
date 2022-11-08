import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal } from "react-bootstrap";
import PyramidScheme from "./PyramidScheme";
import LostIsland from "./LostIsland";
import SpaceRunner from "./SpaceRunner";

function LostIslandModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Lost Island
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <LostIsland />
        <p>
          First-person platformer in which the player takes on the role of a
          castaway in a lost island where he discovers the truth about the old
          gods.
        </p>
        <p>
          <a
            href="https://indreams.me/dream/mZonSiYNhdm"
            target={"_blank"}
            rel="noreferrer"
          >
            Link to the Game
          </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function PyramidSchemeModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Lost Island
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <PyramidScheme />
        <p>
          Tired of being poor, you decide to get as much money as you can, as
          fast as you can. What better way to do that than joining a pyramid
          scheme.
        </p>
        <p>
          <a
            href="https://indreams.me/dream/mjjKZdUenKm"
            target={"_blank"}
            rel="noreferrer"
          >
            Link to the Game
          </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function SpaceRunnerModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Space Runner
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <SpaceRunner />
        <p>2D Platformer created in Unity</p>
        <p>
          <a
            href="https://wakashima.itch.io/space-runner"
            target={"_blank"}
            rel="noreferrer"
          >
            Link to the Game
          </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Cards() {
  const [LIModalShow, setLIModalShow] = React.useState(false);
  const [PSModalShow, setPSModalShow] = React.useState(false);
  const [SPModalShow, setSPModalShow] = React.useState(false);

  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem", height: "25rem" }}>
            <Card.Img variant="top" src="images/Lost_Island_Title.png" />
            <Card.Body>
              <Card.Title>Lost Island</Card.Title>
              <Card.Text>
                First-person platformer in which the player takes on the role of
                a castaway in a lost island where he discovers the truth about
                the old gods. Created using Dreams.
              </Card.Text>
              <Button variant="primary" onClick={() => setLIModalShow(true)}>
                Learn More
              </Button>
              <LostIslandModal
                show={LIModalShow}
                onHide={() => setLIModalShow(false)}
              />
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
              <Button variant="primary" onClick={() => setPSModalShow(true)}>
                Learn More
              </Button>
              <PyramidSchemeModal
                show={PSModalShow}
                onHide={() => setPSModalShow(false)}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem", height: "25rem" }}>
            <Card.Img variant="top" src="images/Space_Runner_Title.png" />
            <Card.Body>
              <Card.Title>Space Runner (small project in Unity)</Card.Title>
              <Card.Text>2D Pixel Platformer.</Card.Text>
              <Button variant="primary" onClick={() => setSPModalShow(true)}>
                Learn More
              </Button>
              <SpaceRunnerModal
                show={SPModalShow}
                onHide={() => setSPModalShow(false)}
              />
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

export { Cards };
