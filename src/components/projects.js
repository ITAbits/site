import React from 'react'

import Card from './card'
import projectsArray from '../assets/data/projects_data'

export default props => {
  const cardList = projectsArray.map((item, index) => {
    return (
      <Card title={item.name} info={item.info} src={item.img} key={index} alt={item.alt} code={item.codeLink} demo={item.demoLink} />
    )
  })

  return (
    <section id='projects'>
      <h3>Projects</h3>
      <hr />
      <div className='row'>
        {cardList}
      </div>
    </section>
  )
}
