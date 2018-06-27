import React from 'react'
import { Icon } from 'semantic-ui-react'
import '../style/ProjectsSector.css'

export default props => {
  return <div id='projects-container'>
    <section id='project-section'>
      <h1>Projetos</h1>
      <h5 id='subtitle-text'><i>Paixão é a nossa marca. ITABits foi criada para centralizar o desenvolvimento de software em um ambiente onde as pessoas possam aprender e produzir juntas!"</i></h5>
      <a href="/projects"><button class='goto-button'><span>DEMOS</span></button></a>
    </section>
  </div>
}
