import React, { Component } from "react";

import { CardDeck, Card , Spinner , Jumbotron , Container , ProgressBar , Carousel } from "react-bootstrap";
import ghk from "../images/hja.png";
import gk from "../images/qwqq.png";
import ak from "../images/qpo.png";
import alp from "../images/lpaq.png";
import ako from "../images/awee.png";
import lpo from "../images/cnwi.jpg";
import ap from "../images/poa.jpg";
import as from "../images/lkal.jpg";
import o from "../images/crea.jpg";

export default class Bike extends Component {
  render() {
    return (
        <>
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

        <div>
        <Card>
            <Card.Header style={{fontSize: "50px" , fontFamily: "sans-serif"}}>About Creativity</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0" style={{fontSize: "25px"}} >
                <p>In a summary of scientific research into creativity, Michael Mumford suggested: "Over the course of the last decade, however, we seem to have reached a general agreement that creativity involves the production of novel, useful products" or, in Robert Sternberg's words, the production of "something original and worthwhile".Authors have diverged dramatically in their precise definitions beyond these general commonalities: Peter Meusburger reckons that over a hundred different analyses can be found in the literature.As an illustration, one definition given by Dr. E. Paul Torrance described it as "a process of becoming sensitive to problems, deficiencies, gaps in knowledge, missing elements, disharmonies, and so on; identifying the difficulty; searching for solutions, making guesses, or formulating hypotheses about the deficiencies: testing and retesting these hypotheses and possibly modifying and retesting them; and finally communicating the results."
                Creativity in general is usually distinguished from innovation in particular, where the stress is on implementation. For example, Teresa Amabile and Pratt defines creativity as production of novel and useful ideas and innovation as implementation of creative ideas, while the OECD and Eurostat state that "Innovation is more than a new idea or an invention. An innovation requires implementation, either by being put into active use or by being made available for use by other parties, firms, individuals or organisations."
                There is also an Emotional creativity which is described as a pattern of cognitive abilities and personality traits related to originality and appropriateness in emotional experience. Research has shown emotional creativity is interrelated with the real-life involvement in different types of specific creative leisure activities.</p>
                </blockquote>
            </Card.Body>
        </Card>
        </div>

        <br/>

        <div>
        <Carousel>
            <Carousel.Item>
                <img height="700px" className="d-block w-100" src={lpo} alt="First slide"/>
            <Carousel.Caption>
                <p style={{fontSize: "35px"}}> "The creative adult is the child who survived." </p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height="700px" className="d-block w-100" src={ap} alt="First slide"/>
            <Carousel.Caption>
                <p style={{fontSize: "35px"}}>"Creativity doesn't wait for that perfect moment. It fashions its own perfect moments out of ordinary ones."</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height="700px" className="d-block w-100" src={as} alt="First slide"/>
            <Carousel.Caption>
                <p style={{fontSize: "35px"}}>"Creativity is inventing, experimenting, growing, taking risks, breaking rules, making mistakes, and having fun." </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>

        <br/>

        <div>
            <CardDeck>
                <Card>
                <Card.Img height="500px" variant="top" src={ghk} />
                <Card.Body>
                    <Card.Title>~Albert Einstein</Card.Title>
                    <Card.Text>Imagination is everything. It is the preview of life’s coming attractions.</Card.Text>
                </Card.Body>
                </Card>

                <Card>
                <Card.Img height="500px" variant="top" src={gk} />
                <Card.Body>
                    <Card.Title>~Steve Jobs</Card.Title>
                    <Card.Text>Creativity is just connecting things.</Card.Text>
                </Card.Body>
                </Card>

                <Card>
                <Card.Img height="500px" variant="top" src={ak} />
                <Card.Body>
                    <Card.Title>~Marilyn Monroe</Card.Title>
                    <Card.Text>Creativity has got to start with humanity and when you’re a human being, you feel, you suffer.</Card.Text>
                </Card.Body>
                </Card>
            </CardDeck>
            
            <br/>

            <div>
                <ProgressBar animated variant="success" now={100} /><br/>
                <ProgressBar animated variant="info" now={100} /><br/>
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
                </div><br/>
                <ProgressBar animated variant="warning" now={100} /><br/>
                <ProgressBar animated variant="danger" now={100} /><br/>
            </div>

            <br/>

            <CardDeck>
                <Card>
                <Card.Img height="500px" variant="top" src={ako} />
                <Card.Body>
                    <Card.Title>Robert Downy Jr.</Card.Title>
                    <Card.Text>Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.</Card.Text>
                </Card.Body>
                </Card>

                <Card>
                <Card.Img height="500px" variant="top" src={o} />
                <Card.Body>
                    <Card.Title>Mark Wood</Card.Title>
                    <Card.Text>Invest time in yourself to have great experiences that are going to enrich you.</Card.Text>
                </Card.Body>
                </Card>

                <Card>
                <Card.Img height="500px" variant="top" src={alp} />
                <Card.Body>
                    <Card.Title>~Sophia Loren</Card.Title>
                    <Card.Text>There is a fountain of youth: it is your mind, your talents, the creativity you bring to your life.</Card.Text>
                </Card.Body>
                </Card>
            </CardDeck>
        </div>

        <br/>

        <div>
        <Jumbotron fluid>
            <Container style={{fontSize: "25px" , textAlign: "start"}}>
                <h1>Ankit's Think Tank</h1>
                <p>The things that makes a person creative is the way a human thinks. Like kind of how he/she makes a noise or sound or things of a song. A person is more creative if he/she imagines something or creates something no other person has though of. e.g Albert Einstein he was so creative. We are all creative and there is no one who is left not creative. A person is creative by their skills, like how someone thinks and doesn’t have a hard time relating with people .Most people have strong desire to fit in, like something you don’t understand.
                A person is more creative when They like to solve problems. They like solve a problem that is hard or easy. They like solve cases that are hard to solve.While some people are running and hiding out of their problems. You purposely seek them because you love more than a fresh new change.</p>
            </Container>
        </Jumbotron>
        </div>

        <br/>

        <div>
            <ProgressBar animated variant="success" now={100} /><br/>
            <ProgressBar animated variant="info" now={100} /><br/>
            <ProgressBar animated variant="warning" now={100} /><br/>
            <ProgressBar animated variant="danger" now={100} /><br/>
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

        <br/><br/>

        <footer class="blog-footer">
            <p>Blog template built for <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Creativity">Creativity</a> by <a target="_blank" rel="noopener noreferrer" href="https://github.com/ankitupadhyay889">@Ankit</a>.</p>
            <p>
            <a href="/about">Back to top</a>
            </p>
        </footer>

        </>
    );
  }
}
