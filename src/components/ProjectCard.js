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
                    <br/>
                    <span id='projectLink'><a href={siteUrl} target='_blank' rel="noreferrer" id='pageLink'>Go to this website.</a></span>
                </div>
        </div>
    </Col>
  )
}

export default ProjectCard