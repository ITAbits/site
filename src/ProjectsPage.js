import React from 'react'
import ProjectCard from './components/ProjectCard'
import projectsArray from './assets/data/projects_data'
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
    <section id='projects'>
      <h1>Projects<a href='/projects'><Icon name='arrow right' /></a></h1>
      <div className='row'>
        {cardList}
      </div>
    </section>
  )
}
