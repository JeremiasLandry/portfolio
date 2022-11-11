import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/github.svg'
import twitter from '../assets/img/twitter.svg'
import navIcon5 from '../assets/img/whatsapp.svg'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = () =>{
        if (window.scrollY > 50){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled': ''}>
        <Container>
            <Navbar.Brand href="/">
                <img id='nv-logo' src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Technologies</Nav.Link>
                <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/jerem%C3%ADas-landry-0b66891a4' target='_blank'>
                        <img src={navIcon1} alt=''></img>
                    </a>
                    <a href='https://github.com/JeremiasLandry' target='_blank'>
                        <img src={navIcon4} alt=''></img>
                    </a>
                    <a href='https://twitter.com/LandryJeremias' target='_blank'>
                        <img src={twitter} alt=''></img>
                    </a>
                    <a href='https://twitter.com/LandryJeremias' target='_blank'>
                        <img src={twitter} alt=''></img>
                    </a>
                </div>
                <a href='#connect'><button className='vvd' onClick={()=> console.log('connect')}><span>Let's connect</span></button></a>
            </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar