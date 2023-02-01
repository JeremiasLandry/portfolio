import React, { useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp} from 'firebase/firestore';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon4 from '../assets/img/github.svg'
import twitter from '../assets/img/twitter.svg'
import SpacemanGif from './LottieCoder';
import hacker from '../hacker.json';

const Contact = () => {
  const formInitialDetails = {
    nombre: '',
    apellido:'',
    email:'',
    telefono:'',
    mensaje:''
  }

  const [formDetails,setFormDetails] = useState(formInitialDetails); //this will update the object 'formInitialDetails' - JJ
  const [buttonText, setButtonText] = useState('Send'); //this is the button text, when user press submit, this has to change to 'sending...' - JJ
  const [status, setStatus] = useState({});
  const [errorMessage,setErrorMessage] = useState({
    empty: false,
    wrongTel:false,
    minChar:false,
    maxChar:false
  });
  const [errorWarning,setErrorWarning] = useState('')

  const onFormUpdate = (category, value) => {
    setFormDetails({
        ...formDetails,
        [category]: value
    })
  }
  
  const handleInputChange= (e) => {
    if (e.target.name === 'telefono'){
      setFormDetails({
            ...formDetails,
            ['telefono']:  parseInt(e.target.value)
        })
    }else{
      setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value
        })
    }
  }

  function isInt(value) {
    var x;
    return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage({
      empty: false,
      wrongTel:false,
      minChar:false,
      maxChar:false
    });

    if(formDetails.nombre === '' || formDetails.apellido === '' || formDetails.email === '' || formDetails.telefono === '' || formDetails.mensaje === ''){
      setErrorMessage({
          ...errorMessage,
          empty: true
      })
      setErrorWarning("Make sure you don't leave empty fields.")
    }else if (!isInt(formDetails.telefono)){
        setErrorMessage({
            ...errorMessage,
            wrongTel:true
        })
        setErrorWarning("Make sure to put numbers in the 'Phone' field")
    }else if(formDetails.mensaje.length < 25){
        setErrorMessage({
            ...errorMessage,
            minChar:true
        })
        setErrorWarning('Make sure you put at least 25 characters.')
    }else if(formDetails.mensaje.length > 2000){
        setErrorMessage({
            ...errorMessage,
            maxChar:true
        })
        setErrorWarning('Make sure you enter 2000 characters maximum.')
    }else{
        setErrorWarning('')
        setButtonText("Sending...");
        const consulta = {
        detalles: {...formDetails},
        fyh: Timestamp.fromDate(new Date())
        }

        const consultasRef= collection(db, 'consultas')

        addDoc(consultasRef, consulta)
        .then((doc) => {
          setStatus('sent')
          setButtonText("Send");
        })

        setFormDetails(formInitialDetails);
    }
  }

  return (
    <section className='contact' id='connect'> {/*the ID attribute is to identify the differents sections of the web, so the navbar can use it to travel fast to it.*/}
        <Container>
            <div className='flex-direction align-items-center justify-content-center paddingBottom'>
              <h2 style={{textAlign: 'center'}}>Contact me</h2>
              <p>If you want to hire me or work with me contact me here.</p>
            </div>
            <Row className='align-items-center justify-content-center align-content-center'>
                <Col xs={12} md={6} xl={5}>
                  <SpacemanGif animationData={hacker}/>
                </Col>
                <Col md={6}>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-3'>
                                <input type='text' value={formDetails.nombre} placeholder='Name' onChange={(e)=> onFormUpdate('nombre', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-3'>
                                <input type='text' value={formDetails.apellido} placeholder='Last Name' onChange={(e)=> onFormUpdate('apellido', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-3'>
                                <input type='email' value={formDetails.email} placeholder='Email' onChange={(e)=> onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-3'>
                                <input type='tel' value={formDetails.telefono} placeholder='Phone' onChange={(e)=> onFormUpdate('telefono', e.target.value)}/>
                            </Col>
                            <Col>
                                <textarea row='6' value={formDetails.mensaje} placeholder='Message' onChange={(e)=> onFormUpdate('mensaje', e.target.value)}></textarea> 
                                <button type='submit'><span>{buttonText}</span></button>
                                {
                                 <p className='py-3'>{errorWarning}</p>
                                }
                            </Col>
                            
                        </Row>
                        <div className='d-flex justify-content-center flex-column'>
                          <p>Get in touch through my social media</p>
                          <div className="social-icon px-3">
                            <a href='https://www.linkedin.com/in/jerem%C3%ADas-landry-0b66891a4' target='_blank'><img src={navIcon1} alt="Icon" /></a>
                            <a href='https://github.com/JeremiasLandry' target='_blank'><img src={navIcon4} alt="Icon" /></a>
                            <a href='https://twitter.com/LandryJeremias' target='_blank'><img src={twitter} alt="Icon" /></a>
                          </div>
                          <small>(+54 11 2557 2060)</small>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact