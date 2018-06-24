import React, {Component} from 'react'

// Landing Page sections
import Header from './components/header'
import About from './components/about'
import ProjectsSector from './components/projects_sector'
import Footer from './components/footer'
import MembersSector from './components/members_sector'
import InfoSector from './components/InfoSector'

// External pages sections

class LandingPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <About />
        <InfoSector />
        <ProjectsSector />
        <MembersSector />
        <Footer />
      </div>
    )
  };
}

export default LandingPage
