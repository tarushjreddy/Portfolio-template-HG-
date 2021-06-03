import React from "react";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, CardColumns} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//import car from "./assets/about.svg"

function Projects() {
  return (
  
 <CardColumns style={{margin:"20px" }}>
      <Card>
        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
        <Card.Body>
          <Card.Title>Project 1 </Card.Title>
          <Card.Text>
            Card Text This card has supporting text below as a natural lead-in
            to additional content.{" "}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer> */}
      </Card>

      <Card>
        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
        <Card.Body>
          <Card.Title>Project 2</Card.Title>
          <Card.Text>
            Card Text his card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer> */}
      </Card>

      <Card>
        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
        <Card.Body>
          <Card.Title>Project 3</Card.Title>
          <Card.Text>
            Card Text his card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 11 mins ago</small>
        </Card.Footer> */}
      </Card>
      
    </CardColumns>
  
  );
}

export default Projects;