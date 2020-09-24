import React, { Component } from "react";

import { Carousel , CardDeck , Card , Spinner, CardColumns } from "react-bootstrap";
import ajif from "../images/crea.jpg";
import gif from "../images/ada.jpg";
import kij from "../images/ade.jpg";
import qw from "../images/lp.jpg";
import qwr from "../images/lak.jpg";
import qwt from "../images/ase.jpg";
import qwer from "../images/lp.jpg";
import wert from "../images/aw.jpg";

export default class Car extends Component {
  render() {
    return (
      <>


      <div>
        <Carousel>
          <Carousel.Item>
            <img height="800px" className="d-block w-100" src={ajif} alt="First slide"/>
            <Carousel.Caption style={{color: "black" , fontSize: "25px" , letterSpacing: "5px"}}>
              <h3> Ursula Leguin </h3>
              <p>"The desire to create is one of the deepest yearnings of the human soul."</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img height="800px" className="d-block w-100" src={gif} alt="Third slide" />

            <Carousel.Caption style={{color: "black" , fontSize: "25px" , letterSpacing: "5px"}}>
              <h3>Bruce Garrabrandt</h3>
              <p> "Creativity doesn't wait for that perfect moment. It fashions its own perfect moments out of ordinary ones." </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img height="800px" className="d-block w-100" src={kij} alt="Third slide" />

            <Carousel.Caption style={{color: "black" , fontSize: "25px" , letterSpacing: "5px"}}>
              <h3>Maya Angelou</h3>
              <p> "To practice any art, no matter how well or badly, is a way to make your soul grow. So do it." </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <br/><br/>

      <div className="container">
      <CardDeck>
        <Card>
          <Card.Img height="500px" variant="top" src={qw} />
          <Card.Body>
            <Card.Title>Kurt Vonnegut</Card.Title>
            <Card.Text>"To practice any art, no matter how well or badly, is a way to make your soul grow. So do it."</Card.Text>
          </Card.Body>

          <Card.Footer></Card.Footer>
        </Card>

        <Card>
          <Card.Img height="350px" variant="top" src={qwr} />
          <Card.Body>
            <Card.Title>Edward de Bono</Card.Title>
            <Card.Text>"Creativity involves breaking out of expected patterns in order to look at things in a different way."</Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>

        <Card>
          <Card.Img height="500px" variant="top" src={qwt} />
          <Card.Body>
            <Card.Title>Mary Lou Cook</Card.Title>
            <Card.Text>"Creativity is inventing, experimenting, growing, taking risks, breaking rules, making mistakes, and having fun."</Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </CardDeck>
      </div>

      <br/><br/>

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

      <br/><br/>

      <div>
      <Card className="bg-dark text-white">
        <Card.Img height="500px" src={qwer} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{fontSize: "35px" , letterSpacing: "10px"}}>Saul Bellow</Card.Title>
          <Card.Text style={{fontSize: "25px" , letterSpacing: "5px"}}>
          “You can't wait for inspiration, you have to go after it with a club.”<br/>
          “Creativity is inventing, experimenting, growing, taking risks, breaking rules,
          making mistakes, and having fun.” <br/> “If you want something new, you have to stop doing something old.” <br/>
          “Creativity is contagious, pass it on.”
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      </div>

      <br/><br/>

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
      
      <br/><br/>


      <CardColumns className="container">
        <Card>
          <Card.Img variant="top" src={wert} />
          <Card.Body>
            <Card.Title>Oscar Wilde</Card.Title>
            <Card.Text>
            “An idea that is not dangerous is unworthy of being called an idea at all.”
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
            “Learn the rules like a pro, so you can break them like an artist.”
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Pablo Picasso</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <Card.Img variant="top" src={wert} />
          <Card.Body>
            <Card.Title>Albert Einstein</Card.Title>
            <Card.Text>
            “I never made one of my discoveries through the process of rational thinking”
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="primary" text="white" className="text-center p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
            “Others have seen what is and asked why. I have seen what could be and asked why not. ”
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Pablo Picasso</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Brene Brown</Card.Title>
            <Card.Text>
            “Vulnerability is the birthplace of innovation, creativity and change.”
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={wert} />
        </Card>
        <Card className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>
            “Don't be satisfied with stories, how things have gone with others. Unfold your own myth.”
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Rumi, The Essential Rumi</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
      </CardColumns>


      <br/><br/>

      <footer class="blog-footer">
        <p>Blog template built for <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Creativity">Creativity</a> by <a target="_blank" rel="noopener noreferrer" href="https://github.com/ankitupadhyay889">@Ankit</a>.</p>
        <p>
          <a href="/">Back to top</a>
        </p>
      </footer>


      </>
    );
  }
}
