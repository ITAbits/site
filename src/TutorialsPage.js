import React, { Component } from 'react';
import {Sidebar, Menu, Button, Segment, Header} from "semantic-ui-react";

import TutorialsPageStyle from './style/TutorialsPage.css';

import TutorialsList from './components/TutorialsList';
import TutorialsContent from './components/TutorialsContent';

class TutorialsPage extends Component {
    constructor(props) {
        super(props);

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
            <div>
                <Sidebar.Pushable>
                    <Sidebar as={Segment} animation='push' visible={this.state.visible}
                             width='medium' vertical inverted>
                        <TutorialsList/>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <TutorialsContent/>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                <Button onClick={this.toggleVisible} > Toggle Sidemenu! </Button>
            </div>
        );
    }
}

export default TutorialsPage;