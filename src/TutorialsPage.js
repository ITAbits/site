import React, { Component } from 'react';
import {Sidebar, Button, Segment} from "semantic-ui-react";
import {Route} from "react-router-dom"

import './style/TutorialsPage.css';

import TutorialsList from './components/TutorialsList';
import TutorialsContent from './components/TutorialsContent';

import TUTORIAL_DATA from "./assets/data/tutorials.json";

class TutorialsPage extends Component {
    constructor(props) {
        super(props);

        this.path = props.match.path;
        this.tutorials = TUTORIAL_DATA['tutorials'];

        // Initial state
        this.state = {
            visible: true
        };

        // Toggle sidebar visibility
        this.toggleVisible = () => {
            this.setState({
                visible: !this.state.visible
            })
        };
    }

    render() {

        return(
            <div className="tutorialsPage">
                <Sidebar.Pushable>

                    <Sidebar as={Segment} animation='push' visible={this.state.visible}
                             width='medium' vertical inverted>
                      <TutorialsList parentPath={this.path} list={this.tutorials}/>
                    </Sidebar>

                      <Sidebar.Pusher>
                        <Route exact path={`${this.path}`} component={TutorialsHome}/>
                        <Route path={`${this.path}/:tutorial`} component={TutorialsContent} />
                      </Sidebar.Pusher>

                </Sidebar.Pushable>

              <Button onClick={this.toggleVisible} > Toggle Sidemenu! </Button>

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