import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({ title, description, imgUrl, siteUrl}) => {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
                <img src={imgUrl}/>
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br/>
                    <span><a href={siteUrl} target='_blank' id='pageLink'>Ir a la pagina.</a></span>
                </div>
        </div>
    </Col>
  )
}

export default ProjectCard