import React from 'react'
import ProjectCard from './ProjectCard'
import projectsArray from '../assets/data/projects_data'
import { Icon, Container, Header, Grid } from 'semantic-ui-react'

export default props => {
  const cardList = projectsArray.map((item, index) => {
    return (
      <ProjectCard
        title={item.name}
        info={item.info}
        src={item.img}
        gif={item.gif}
        key={index}
        alt={item.alt}
        developers={item.developers}
        code={item.codeLink}
        demo={item.demoLink}
      />
    )
  })

  return (
    <div id='projects-container'>
      <section id='project-section'>
        <h1>Projects<a href='/projects'><Icon name='arrow right' /></a></h1>
        <h5>"Passion is our mark. ITA_Bits was created to centralize our dreams in an environment where people can learn and grow together!"</h5>
          <div className='row'>
          {cardList}
        </div>
      </section>
    </div>
  )
}
