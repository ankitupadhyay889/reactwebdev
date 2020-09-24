import React, { Component } from "react";

import {Card , Spinner} from "react-bootstrap";
import Car from "../boots/Car";

export default class Home extends Component {
  render() {
    return (
      <>
      <div>
        <Card className="text-center">
          <Card.Header style={{fontSize: "50px" , fontWeight: "700" , letterSpacing: "20px" , fontFamily: "sans-serif"}}>Designing Your Dreams</Card.Header>
          <Card.Body>
            <Card.Title style={{fontSize: "40px" , letterSpacing: "5px"}}>"You can't use up creativity. ...</Card.Title>
            <Card.Text style={{fontSize: "30px"}}>
              Creativity is the act of turning new and imaginative ideas into reality. 
              Creativity is characterised by the ability to perceive the world in new ways, <br/>
              to find hidden patterns, to make connections between seemingly unrelated phenomena, 
              and to generate solutions. Creativity involves two processes: thinking, then producing.
              “A product is creative when it is (a) novel and (b) appropriate. A novel product is original not predictable. 
              The bigger the concept, and the more the product stimulates further work and ideas, the more the product is creative.”<br/>
              "Sternberg & Lubart"
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <br/>
      
      <div style={{letterSpacing: "10px"}}>
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
      </div>
      
      <br/>

      <div>
        <Car />
      </div>
      
      </>
    );
  }
}
