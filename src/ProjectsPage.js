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
        // this.cardDivList[i].className = this.cardList[i].year === '2018' ? 'card col m6 s12 l4' : 'card-hidden'
        if (projectsArray[i].year === year || year === 'All') {
          // console.log(i, " has year 2018")
          this.cardDivList[i].style.display = 'inline'
        } else {
          // console.log(i, ' has year ', projectsArray[i].year)
          this.cardDivList[i].style.display = 'none'
        }
        console.log(this.cardDivList.length)
      }
    }
  }

  render () {
    return (
      <section id='projects'>
        <h1>Projetos<a href='/projects' /></h1>
        <p style={{color:'white'}}>desenvolvimentos por membros em</p>
        <Button class='year-btn' onClick={() => {
          this.selectCardFromList('All')
        }}>ALL</Button>
        <Button class='year-btn' onClick={() => {
          this.selectCardFromList('2018')
        }}>2018</Button>
        <Button class='year-btn' onClick={() => {
          this.selectCardFromList('2017')
        }}>2017</Button>
        <Button class='year-btn' onClick={() => {
          this.selectCardFromList('2011')
        }}>2011</Button>
        <Container>
          <Grid stackable centered columns={3}>
            {this.cardList}
          </Grid>
        </Container>
      </section>
    )
  }
}

export default ProjectsPage
