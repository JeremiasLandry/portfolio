import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/punchline-card.jpg";
import projImg2 from "../assets/img/chardle-card.jpg";
import projImg3 from "../assets/img/g4gcard.jpg";
import projImg4 from '../assets/img/puntoitaliacard.jpg'
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
    
  const projects = [
    {
      title: "PUNCHLINE",
      description: "E-COMMERCE (HTML, CSS, JavaScript, Bootstrap, React.js, Firebase)",
      imgUrl: projImg1,
      siteUrl:'https://punchline-one.vercel.app'
    },
    {
      title: "CHARDLE",
      description: "GUESS THE FICTIONAL CHARACTER GAME (HTML, CSS, JavaScript, React.js)",
      imgUrl: projImg2,
      siteUrl:'https://chardle.vercel.app'
    },
    {
      title: "g4g games",
      description: "E-COMMERCE (HTML, CSS, Bootstrap, JavaScript, React.js, Firebase)",
      imgUrl: projImg3,
      siteUrl:'https://g4g.vercel.app'
    },
    {
      title: "Punto Italia",
      description: "Landing Page for italian restaurant (HTML, CSS, JavaScript, SASS, Bootstrap)",
      imgUrl: projImg4,
      siteUrl:'https://jeremiaslandry.github.io/Punto-Italia-2/'
    }
  ];

  return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col size={12}>
                    <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p id='project-description'>These are some of the projects I have made last year. In the description you can find the different technologies used for the development of these websites.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                        <Row>
                            {
                            projects.map((project, index) => {
                                return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                            }
                        </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </div>}
            </TrackVisibility>
                </Col>
            </Row>
        </Container>
        {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}

export default Projects