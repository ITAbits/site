import React, { Component } from 'react';
import { List } from 'semantic-ui-react';


import TutorialsListItem from './TutorialsListItem';

import TUTORIAL_DATA from "../assets/data/tutorials";

class TutorialsList extends Component {
    constructor(props){
        super(props);
        this.root_url = TUTORIAL_DATA['root_url'];
    }

    render() {
        // Reads JSON with tutorials data and create array of react components
        const tutorialItems = TUTORIAL_DATA['tutorials'].map( (tutorial, index) => {

            return (
                <TutorialsListItem key={index}
                                   title={tutorial.title}
                                   url={this.root_url + tutorial.content_url}
                                   chapters={tutorial.chapters}/>
            );
        });

        return(
            <List bulleted vertical divided inverted compact link>
                {tutorialItems}
            </List>
        );
    };
}

export default TutorialsList;