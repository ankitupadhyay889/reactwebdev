import React, { Component } from 'react';

import {Form , Button , Spinner , Jumbotron , Container , ProgressBar} from "react-bootstrap";

export default class Cycle extends Component {
    render() {
        return (
            <>

            <br/><br/>

            <div>
                <Jumbotron fluid>
                    <Container style={{textAlign: "start"}}>
                        <h1>Contact With Creativity!!</h1>
                        <p style={{fontSize: "20px"}}>Creativity is a phenomenon whereby something new and somehow valuable is formed.
                            The created item may be intangible (such as an idea, a scientific theory, a musical composition, or a joke) 
                            or a physical object (such as an invention, a printed literary work, or a painting).
                            Creativity is a combined power, and over the years individuals are able to expand internal reservoir 
                            of means as intelligence, wisdom, imagination and all the fragments of mind which have acquired from 
                            being conscious, alive and wakeful to the universe in an incredibly new manner.
                            Creativity consists of four elements. These parts includes creative processes, creative individual, 
                            creative product and creative environment. In this century, creativity has always been at the core of 
                            corporations, schools and basically which is a key of successful life. However, creativity has always 
                            been the subject of researchers in fields ranging from anthropology to neuroscience.</p>
                    </Container>
                </Jumbotron>
            </div>

            <br/><br/>

            <div>
                <ProgressBar animated variant="success" now={100} /><br/>
                <ProgressBar animated variant="info" now={100} /><br/>
                <ProgressBar animated variant="warning" now={100} /><br/>
                <ProgressBar animated variant="danger" now={100} /><br/>
            </div>

        <br/>

            <div className="container">
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="name surname" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select</Form.Label>
                        <Form.Control as="select">
                        <option>Query?</option>
                        <option>Suggestion?</option>
                        <option>Contact?</option>
                        <option>Join Us?</option>
                        <option>Other?</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write Which you select</Form.Label>
                        <Form.Control as="textarea" rows="7" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>What about your Thinking?</Form.Label>
                        <Form.Control as="textarea" rows="10" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

            <br/>

            <div style={{letterSpacing: "10px"}}>
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="dark" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="light" />
                <Spinner animation="grow" variant="dark" />
            </div>

            <br/>

            <footer class="blog-footer">
                <p>Blog template built for <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Creativity">Creativity</a> by <a target="_blank" rel="noopener noreferrer" href="https://github.com/ankitupadhyay889">@Ankit</a>.</p>
                <p>
                <a href="/contact">Back to top</a>
                </p>
            </footer>
            
            </>
        )
    }
}
