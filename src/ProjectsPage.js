import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'
import ProjectCard from './components/ProjectCard'
import projectsArray from './assets/data/projects_data'
import {Button} from 'semantic-ui-react'
import './style/ProjectsPage.css'

class ProjectsPage extends Component {
  constructor (props) {
    super(props)

    /* Enabled - Disabled button effect */

    this.cardList = projectsArray.map((item, index) => {
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

    this.selectCardFromList = (year) => {
      this.cardDivList = document.getElementsByClassName('card col m6 s12 l4')

      for (var i = 0; i < this.cardDivList.length; i++) {
        if (projectsArray[i].year === year || year === 'All') {
          this.cardDivList[i].style.display = 'inline'
        } else {
          this.cardDivList[i].style.display = 'none'
        }
      }
    }
  }

  render () {
    return (
      <section id='projects'>
        <h1>Projetos<a href='/projects' /></h1>
        <p style={{color:'white'}}>desenvolvidos por membros em</p>
        <Button className='year-btn' onClick={() => {
          this.selectCardFromList('All')
        }}>ALL</Button>
        <Button className='year-btn' onClick={() => {
          this.selectCardFromList('2018')
        }}>2018</Button>
        <Button className='year-btn' onClick={() => {
          this.selectCardFromList('2017')
        }}>2017</Button>
        <Button className='year-btn' onClick={() => {
          this.selectCardFromList('2011')
        }}>2011</Button>
        <div style={{marginTop: 25}}>
          <Container>
            <Grid stackable centered columns={3}>
              {this.cardList}
            </Grid>
          </Container>
        </div>
      </section>
    )
  }
}

export default ProjectsPage
