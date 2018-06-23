import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';

class TutorialsContent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        currentTutorial: props.match.params.tutorial
      };
    }

    componentDidUpdate(prevProps) {
      console.log(prevProps);
      if(this.state.currentTutorial !== this.props.match.params.tutorial) {
        this.setState({
          currentTutorial: this.props.match.params.tutorial
        });
      }
    }

    render() {
        return(

            <Segment>
                <Header as='h3'> {this.state.currentTutorial} Tutorial</Header>
            </Segment>
        );
    }
}

export default TutorialsContent;