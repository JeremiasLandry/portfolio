import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from '../assets/img/github.svg'
import twitter from '../assets/img/twitter.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <Container id='footerCTN'>
        <Row className="align-items-center footer-container justify-content-between">
          <Col size={12} sm={6} className='d-flex align-items-center justify-content-center mb-5'>
            <img src={logo} alt="Logo" style={{maxWidth:200+'px'}}/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end d-flex align-items-center justify-content-center mb-5 flex-column ">
            <div className="social-icon px-3">
              <a href='https://www.linkedin.com/in/jerem%C3%ADas-landry-0b66891a4' target='_blank'><img src={navIcon1} alt="Icon" /></a>
              <a href='https://github.com/JeremiasLandry' target='_blank'><img src={navIcon4} alt="Icon" /></a>
              <a href='https://twitter.com/LandryJeremias' target='_blank'><img src={twitter} alt="Icon" /></a>
            </div>
            <p>(+54 11 2557 2060)</p>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
