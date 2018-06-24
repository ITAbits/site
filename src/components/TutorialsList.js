import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import TutorialsListItem from './TutorialsListItem';

class TutorialsList extends Component {
    constructor(props){
        super(props);
        this.parentPath = props.parentPath || "/";
        this.tutorials = props.list || [];
    }

    render() {
        // Reads JSON with tutorials data and create array of react components
        const tutorialItems = this.tutorials.map( (tutorial, index) => {
            return (
                <TutorialsListItem key={index}
                                   title={tutorial.title}
                                   url={this.parentPath + tutorial.content_url}
                                   chapters={tutorial.chapters}/>
            );
        });

        return(
            <div>
              <header>
                <Link to={this.parentPath}> Tutoriais </Link>
              </header>
              <List bulleted vertical inverted>
                  {tutorialItems}
              </List>
            </div>
        );
    };
}

export default TutorialsList;