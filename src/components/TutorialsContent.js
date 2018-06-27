import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import  ReactMarkdown from 'react-markdown';

import CodeBlockRenderer from "./CodeBlockRenderer";
import ImageBlockRenderer from "./ImageBlockRenderer";

import discord from "../assets/data/tutoriais/discord/readme.md";
import cCsharp from "../assets/data/tutoriais/ccsharp/docs/De-C-para-C#/README.md";
import helloW from "../assets/data/tutoriais/ccsharp/docs/De-C-para-C#/Primeiro-Projeto-(Windows).md";
import princDif from "../assets/data/tutoriais/ccsharp/docs/De-C-para-C#/Principais-Diferencas.md";

import TUTORIAL_DATA from "../assets/data/tutoriais/tutorials.json";

const discordPath = "../assets/data/tutoriais/discord/readme.md";
const cCsharpPath = "../assets/data/tutoriais/ccsharp/docs/De-C-para-C#/README.md";
const helloWPath = "../assets/data/tutoriais/ccsharp/docs/De-C-para-C#/Primeiro-Projeto-(Windows).md";
const princDifPath = "../assets/data/tutoriais/ccsharp/docs/De-C-para-C#/Principais-Diferencas.md";

class TutorialsContent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        currentTutorial: props.match.params.tutorial,
        currentChapter: props.match.params.chapter,
        content: null
      };
    }

    componentDidMount(){
      const contentSrc = this.fetchContentPath(this.state.currentTutorial, this.state.currentChapter);
      console.log(contentSrc);

      this.changeContentState();
    }

    componentDidUpdate(prevProps) {
      if(this.state.currentTutorial !== this.props.match.params.tutorial ||
          this.state.currentChapter !== this.props.match.params.chapter ) {

        this.changeContentState();
        this.setState({
          currentTutorial: this.props.match.params.tutorial,
          currentChapter: this.props.match.params.chapter,
        });
      }
    }

    changeContentState(){
        const contentSrc = this.fetchContentPath(this.props.match.params.tutorial, this.props.match.params.chapter);
        console.log(contentSrc);

        let trueContentSrc = undefined;
        if( contentSrc === cCsharpPath ) trueContentSrc = cCsharp;
        else if ( contentSrc === helloWPath ) trueContentSrc = helloW;
        else if ( contentSrc === princDifPath ) trueContentSrc = princDif;

        fetch(trueContentSrc)
            .then(res => res.text())
            .then( text => {
              this.setState({content: text})
            });
    }

    fetchContentPath(tutorialUrl, chapterUrl){
      if (tutorialUrl === undefined || tutorialUrl === null || tutorialUrl.length <= 0) {
        return "";
      }
      console.log(`Looking for ${tutorialUrl} and ${chapterUrl}`);

      const hasChapter = chapterUrl !== undefined && chapterUrl !== null && chapterUrl.length > 0;

      if ( tutorialUrl[0] !== "/" ){
        tutorialUrl = "/" + tutorialUrl;
      }

      if ( hasChapter && chapterUrl[0] !== "/"){
        chapterUrl  = "/" + chapterUrl;
      }

      const database = TUTORIAL_DATA["tutorials"];
      console.log(database);
      let tutorialPath, chapterPath, file = undefined;
      if ( !hasChapter ){
        chapterPath = "";
      }

      for ( let i = 0; i<database.length; i++) {
        let tutorial = database[i];

        if ( tutorial.content_url === tutorialUrl ) {
          tutorialPath = tutorial.content_path;

          if ( hasChapter ) {
            for ( let j = 0; j< tutorial.chapters.length; j++) {
              let chapter = tutorial.chapters[j];

              if ( chapter.content_url === chapterUrl) {
                chapterPath = chapter.content_path;
                file = chapter.content_file;
                break;
              }
            }
          }
          else {
            file = tutorial.content_file;
          }

          break;
        }
      }
      console.log(`Format ${tutorialPath}, ${chapterPath} and ${file}`);

      return this.formatContentPath(tutorialPath, chapterPath, file);
    }

    formatContentPath(tutorialPath, chapterPath, fileName) {
      if ( tutorialPath === undefined || tutorialPath === null || tutorialPath.length <= 0
            || chapterPath === undefined || chapterPath === null
            || fileName === undefined || fileName === null || fileName.length <= 0)
      {
        return "";
      }

      let formattedPath = "../assets/data/tutoriais";

      if ( tutorialPath[0] !== '/' ) {
        formattedPath += "/" + tutorialPath;
      }
      else {
        formattedPath += tutorialPath;
      }

      if ( formattedPath[formattedPath.length-1] === "/" && chapterPath[0] === "/"){
        formattedPath += chapterPath.substr(1, chapterPath.length-1);
      }
      else if (formattedPath[formattedPath.length-1] !== "/" && chapterPath[0] !== "/") {
        formattedPath += "/" + chapterPath;
      }
      else {
        formattedPath += chapterPath;
      }

      formattedPath += fileName;

      return formattedPath;
    }

    render() {
        const { content } = this.state;

        return(

            <Segment>
              <Header as='h3'> {this.state.currentTutorial+"/"+this.state.currentChapter} Tutorial</Header>
              <div className="tutorialContentWrapper">
                {content ?
                    <ReactMarkdown className="tutorialContent"
                                   renderers={{
                                     code: CodeBlockRenderer,
                                     img: ImageBlockRenderer
                                   }}
                                   source={content}
                                   escapeHtml={false}
                    />
                    : null }
              </div>
              </Segment>
        );
    }
}

export default TutorialsContent;