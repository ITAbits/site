import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class TutorialsListItem extends Component {
    constructor(props) {
        super(props);

        this.title = props.title;
        this.content_url = props.url;
        this.chapters = props.chapters;

        this.state = {
            dropped: false
        };
    }

    render() {
        // Creates array of react components from chapter data array
        const chapterItems = this.chapters.map((chapter, index) =>{

            return(
                <Link to={this.content_url+chapter.content_url}>
                  <List.Item id="tutorialChapterItem"
                             index={index}
                             content={chapter.title}/>
                </Link>
            );
        });


        return(
                <List.Item className="tutorialsSidebarItem">
                    <Link className="tutorialTitle" to={this.content_url}> {this.title} </Link>
                    <List bulleted vertical>
                        {chapterItems}
                    </List>
                </List.Item>
        );
    }
}

export default TutorialsListItem;