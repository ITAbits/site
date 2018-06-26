import React, { Component } from 'react';
import {Sidebar, Button, Segment, Sticky, Menu, List} from "semantic-ui-react";
import { Route, Link} from "react-router-dom"

import './style/TutorialsPage.css';

import TutorialsList from './components/TutorialsList';
import TutorialsContent from './components/TutorialsContent';

import TUTORIAL_DATA from "./assets/data/tutoriais/tutorials.json";

class TutorialsPage extends Component {
    constructor(props) {
        super(props);

        this.path = props.match.path;
        this.tutorials = TUTORIAL_DATA['tutorials'];

        // Initial state
        this.state = {
            visible: true
        };

        this.toggleVisible = () => {
          this.setState({
            visible: !this.state.visible
          })
        }
    }

    render() {

        return(
            <div className="tutorialsPage">
              <Button onClick={this.toggleVisible} > I exist! </Button>
                <Sidebar.Pushable >

                  <Sidebar id="tutorialsSidebar" as={Menu} animation="push" visible={this.state.visible}
                             direction="left" vertical inverted>
                    <TutorialsList parentPath={this.path} list={this.tutorials}/>
                  </Sidebar>

                    <Sidebar.Pusher>
                      <Route exact path={`${this.path}`} component={TutorialsHome}/>
                      <Route exact path={`${this.path}/:tutorial`} component={TutorialsContent} />
                      <Route path={`${this.path}/:tutorial/:chapter`} component={TutorialsContent} />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}

class TutorialsHome extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="tutorialsContent">
          <h3> TUTORIALS HOME! </h3>
        </div>
    );
  }
}

export default TutorialsPage;