import React from 'react'
import ProjectCard from './project_card'
import projectsArray from '../assets/data/projects_data'

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
      <h1>Projects</h1>
      <div className='row'>
        {cardList}
      </div>
    </section>
  )
}
