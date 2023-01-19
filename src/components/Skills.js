import React from 'react';
import react from "../assets/img/react.svg";
import javascript from "../assets/img/javascript.svg";
import html5 from "../assets/img/html5.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import sass from "../assets/img/sass.svg";
import jquery from "../assets/img/jquery.svg";
import css from "../assets/img/css3.svg";
import git from "../assets/img/git.svg";
import storybook from "../assets/img/storybook.svg";
import styledcomponents from "../assets/img/styled-components.svg";
import firebase from "../assets/img/firebase.svg";
import { Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/wallpaper.png";




const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx wow zoomIn'>
                        <h2>
                            Technologies
                        </h2>
                        <p>These are the different technologies and tools that are in my knowledge and that are part of the projects that I made</p>
                        <Carousel responsive={responsive} infinite={true} className='owl-carousel owl-theme skill-slider'>
                            <div className='item'>
                                <img src={javascript} alt='Image'/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className='item'>
                                <img src={react} alt='Image'/>
                                <h5>React</h5>
                            </div>
                            <div className='item'>
                                <img src={html5} alt='Image'/>
                                <h5>HTML5</h5>
                            </div>
                            <div className='item'>
                                <img src={bootstrap} alt='Image'/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className='item'>
                                <img src={jquery} alt='Image'/>
                                <h5>JQuery</h5>
                            </div>
                            <div className='item'>
                                <img src={sass} alt='Image'/>
                                <h5>SASS</h5>
                            </div>
                            <div className='item'>
                                <img src={css} alt='Image'/>
                                <h5>CSS3</h5>
                            </div>
                            <div className='item'>
                                <img src={storybook} alt='Image'/>
                                <h5>Storybook</h5>
                            </div>
                            <div className='item'>
                                <img src={styledcomponents} alt='Image'/>
                                <h5>Styled Components</h5>
                            </div>
                            <div className='item'>
                                <img src={git} alt='Image'/>
                                <h5>Git</h5>
                            </div>
                            <div className='item'>
                                <img src={firebase} alt='Image'/>
                                <h5>Firebase</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Skills