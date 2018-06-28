import React, { Component } from 'react';
import {Sidebar, Button, Segment, Sticky, Menu, Loader} from "semantic-ui-react";
import { Route, Switch} from "react-router-dom"

import './style/TutorialsPage.css';

import TutorialsList from './components/TutorialsList';
import TutorialsContent from './components/TutorialsContent';

const TUTORIAL_DATA_PATH = "tutoriais/tutorials.json";

class TutorialsPage extends Component {
    constructor(props) {
        super(props);

        this.path = props.match.path;

        // Initial state
        this.state = {
            sidebarVisible: true,
            isLoaded: false,
            tutorialInfo: null
        };

        this.toggleVisible = () => {
          this.setState({
            sidebarVisible: !this.state.sidebarVisible
          })
        };

        this.handleContextRef = (contextRef) => {
          this.setState({
                contextRef: contextRef
              }
          );
        }
    }

    componentDidMount() {
      fetch(TUTORIAL_DATA_PATH).then(response => response.json())
          .then( (result) => {
                this.setState({
                  isLoaded: true,
                  tutorialInfo: result
                })
              },
              (error) => {
                this.setState({
                  isLoaded: false,
                  error
                })
              }
          );
    }

    render() {

      const {contextRef, sidebarVisible, tutorialInfo} = this.state;
      console.log(`TutorialsPage:: tutorialinfo = ${tutorialInfo}`);
      if(this.state.isLoaded){
        console.log(tutorialInfo);
      }


      if ( !this.state.isLoaded ){
        return (
            <div className="tutorialsPage" ref={this.handleContextRef}>
              <Loader/>
            </div>
        );
      }
        else
      {
        return (
            <div className="tutorialsPage" ref={this.handleContextRef}> 
              <Sidebar.Pushable>
  
                <Sidebar id="tutorialsSidebar" as={Menu} animation="push" visible={sidebarVisible}
                         direction="left" vertical inverted>
                  <TutorialsList parentPath={this.path} list={tutorialInfo['tutorials']}/>
                </Sidebar>  

                <Sidebar.Pusher>
                  <Sticky id="but" context={contextRef}>
                    <Button onClick={this.toggleVisible}> I exist! </Button>
                  </Sticky>
                  <Switch>
                    <Route exact path={`${this.path}`} component={TutorialsHome}/>
                    <Route exact path={`${this.path}/:tutorial`} render={(props) => {
                      return <TutorialsContent tutorial={props.match.params.tutorial}
                                               database={tutorialInfo}/>;
                    }}/>
                    <Route exact path={`${this.path}/:tutorial/:chapter`} render={(props) => {
                      return <TutorialsContent tutorial={props.match.params.tutorial}
                                               chapter={props.match.params.chapter}
                                               database={tutorialInfo}/>;
                    }}/>

                  </Switch>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </div>
        );
      }
    }
}

class TutorialsHome extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="tutorialContent">
          <h3> Bem vindo à página de tutoriais da ITABits! </h3>
          <p>
            Para navegar entre nossos conteúdos basta utilizar a barra de navegação lateral. Você é livre para
            usar, distribuir ou alterar nossos treinamentos livremente mas pedimos que cite os autores originais.
          </p>
        </div>
    );
  }
}

export default TutorialsPage;