import React, {Component} from 'react'

// Landing Page sections
import Header from './components/header'
import ProjectsSector from './components/projects_sector'
import Footer from './components/footer'
import MembersSector from './components/members_sector'

// External pages sections

class LandingPage extends Component {
  render () {
    return (
      <section>
        <Header />
        {/*<About />*/}
        <ProjectsSector />
        <MembersSector />
        <Footer />
      </section>
    )
  };
}

export default LandingPage
