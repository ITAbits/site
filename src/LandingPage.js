import React, {Component} from 'react';

// Landing Page sections
import Header from './components/header';
import About from './components/about';
import Footer from './components/footer';

// External pages sections
import Projects from './components/projects';
import Members from './components/members';

class LandingPage extends Component {
    render(){

      return (
          <section>
              <Header/>
              <About/>
              <Projects/>
              <Members/>
              <Footer/>
          </section>
      );
    };
}

export default LandingPage;