import React, { Component } from 'react';
import {Sidebar, Button, Segment, Sticky, Menu, List} from "semantic-ui-react";
import { Route, Switch} from "react-router-dom"

import './style/TutorialsPage.css';
// import './assets/images/'

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

        this.handleContextRef = (contextRef) => {
          this.setState({
                contextRef: contextRef
              }
          );
        }
    }

    render() {

      const {contextRef} = this.state;

        return(
            <div className="tutorialsPage" ref={this.handleContextRef}>
                <Sidebar.Pushable >

                  <Sidebar id="tutorialsSidebar" as={Menu} animation="push" visible={this.state.visible}
                             direction="left" vertical inverted>
                    <Button onClick={this.toggleVisible} > I exist! </Button>
                    <TutorialsList parentPath={this.path} list={this.tutorials}/>
                  </Sidebar>

                    <Sidebar.Pusher >
                      <Sticky id="but" context={contextRef}>
                       <Button  onClick={this.toggleVisible} > I exist! </Button>
                      </Sticky>
                      <Switch>
                      <Route exact path={`${this.path}`} component={TutorialsHome}/>
                      <Route exact path={`${this.path}/:tutorial`} component={TutorialsContent} />
                      <Route path={`${this.path}/:tutorial/:chapter`} component={TutorialsContent} />
                      </Switch>
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