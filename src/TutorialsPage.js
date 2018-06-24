import React, { Component } from 'react';
import {Sidebar, Button, Segment} from "semantic-ui-react";
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
    }

    render() {

        return(
            <div>
                <Sidebar.Pushable className="tutorialsPage">

                    <Sidebar as={Segment} animation='push' visible={this.state.visible}
                             width='very wide' vertical inverted>
                      <div className="tutorialsSidebar">
                        <TutorialsList  parentPath={this.path} list={this.tutorials}/>
                      </div>
                    </Sidebar>

                      <Sidebar.Pusher>
                        <Route exact path={`${this.path}`} component={TutorialsHome}/>
                        <Route path={`${this.path}/:tutorial`} component={TutorialsContent} />
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