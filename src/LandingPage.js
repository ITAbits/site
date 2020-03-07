import React, {Component} from 'react'

// Landing Page sections
import Header from './components/header'
import About from './components/about'
import ProjectsSector from './components/ProjectsSector'
import Footer from './components/footer'
import InfoSector from './components/InfoSector'
import TutorialsSector from './components/TutorialsSector'
import CalendarSector from './components/CalendarSection'

// External pages sections

class LandingPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <About />
        <InfoSector />
        <ProjectsSector />
        <TutorialsSector />
        <Footer />
      </div>
    )
  };
}

export default LandingPage
