import React, { useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg'

const Contact = () => {
  const formInitialDetails = {
    nombre: '',
    apellido:'',
    email:'',
    telefono:'',
    mensaje:''
  }

  const [formDetails,setFormDetails] = useState(formInitialDetails); //this will update the object 'formInitialDetails' - JJ
  const [buttonText, setButtonText] = useState('send'); //this is the button text, when user press submit, this has to change to 'sending...' - JJ
  const [status, setStatus] = useState({}); //this is the status of the post method, 400 or 200 depending of the succes of the call. - JJ

  const onFormUpdate = (category, value) => {
    setFormDetails({
        ...formDetails,
        [category]: value
    })
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Enviar");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Mensaje enviado con exito.'});
    } else {
      setStatus({ succes: false, message: 'Algo salió mal, intentalo mas tarde.'});
    }
  }

  return (
    <section className='contact' id='connect'> {/*the ID attribute is to identify the differents sections of the web, so the navbar can use it to travel fast to it.*/}
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImg} alt='Contact Us'/>
                </Col>
                <Col md={6}>
                    <h2>Contactame</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.nombre} placeholder='Nombre' onChange={(e)=> onFormUpdate('nombre', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.apellido} placeholder='Apellido' onChange={(e)=> onFormUpdate('apellido', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='email' value={formDetails.email} placeholder='Email' onChange={(e)=> onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='tel' value={formDetails.telefono} placeholder='Telefono' onChange={(e)=> onFormUpdate('telefono', e.target.value)}/>
                            </Col>
                            <Col>
                                <textarea row='6' value={formDetails.mensaje} placeholder='Mensaje' onChange={(e)=> onFormUpdate('mensaje', e.target.value)}></textarea> 
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact