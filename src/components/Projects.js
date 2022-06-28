import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/punchline-card.jpg";
import projImg2 from "../assets/img/chardle-card.jpg";
import projImg3 from "../assets/img/ee-card.jpg";
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
      description: "CLON DEL JUEGO WORDLE PERO CON TEMATICA ORIENTADA A PERSONAJES FICTICIOS. (HTML, CSS, JavaScript, React.js)",
      imgUrl: projImg2,
      siteUrl:'https://chardle.vercel.app'
    },
    {
      title: "EE",
      description: "CREA EXPEDIENTES DE USUARIOS CON SU INFORMACION ESPECIFICA Y ARCHIVALOS O ELIMINALOS (HTML, CSS, JavaScript, JQuery, Bootstrap)",
      imgUrl: projImg3,
      siteUrl:'https://jeremiaslandry.github.io/Proyecto-Coderhouse/'
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
                    <h2>Proyectos</h2>
                    <p id='project-description'>Estos son algunos de los proyectos que realice en este ultimo año. En la descripción se pueden encontrar las diferentes tecnologías usadas para el desarrollo de estas paginas web.</p>
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