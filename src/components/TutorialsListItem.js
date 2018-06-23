import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

class TutorialsListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            content_url: props.url,
            chapters: props.chapters,
            dropped: false
        };
    }

    render() {
        // Creates array of react components from chapter data array
        const chapterItems = this.state.chapters.map((chapter, index) =>{

            return(
                <List.Item as='a'
                           index={index}
                           content={chapter.title}
                           href={this.state.content_url+chapter.content_url}
                />
            );
        });


        return(
                <List.Item>
                    <a href={this.state.content_url}> {this.state.title} </a>
                    <List bulleted vertical link>
                        {chapterItems}
                    </List>
                </List.Item>
        );
    }
}

export default TutorialsListItem;