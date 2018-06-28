import React, { Component } from 'react';
import { Segment, Loader } from 'semantic-ui-react';
import  ReactMarkdown from 'react-markdown';

import CodeBlockRenderer from "./CodeBlockRenderer";
import ImageRenderer from "./ImageRenderer";
import LinkRenderer from "./LinkRenderer";

const discordPath = "tutorials/discord/readme.md";
const cCsharpPath = "tutorials/ccsharp/docs/De-C-para-C#/README.md";
const helloWPath = "tutorials/ccsharp/docs/De-C-para-C#/Primeiro-Projeto-(Windows).md";
const princDifPath = "tutorials/ccsharp/docs/De-C-para-C#/Principais-Diferencas.md";
const unityPath = "tutorials/unity/test.md";

class TutorialsContent extends Component {
    constructor(props) {
      super(props);
      console.log("props");
      console.log(props);
      this.state = {
        currentTutorial: props.tutorial,
        currentChapter: props.chapter,
        database: props.database,
        isLoaded: false,
        content: null
      };
    }

    componentDidMount() {

      this.changeContentState();
    }

    componentDidUpdate(prevProps) {
      if(this.state.currentTutorial !== this.props.tutorial ||
          this.state.currentChapter !== this.props.chapter ) {

        this.changeContentState();
        this.setState({
          currentTutorial: this.props.tutorial,
          currentChapter: this.props.chapter,
        });
      }
    }

    changeContentState() {

        const contentSrc = this.fetchContentPath(this.props.tutorial, this.props.chapter);
        console.log(contentSrc);

        // let trueContentSrc = undefined;
        // if ( contentSrc === discordPath ) trueContentSrc = discord;
        // else if( contentSrc === cCsharpPath ) trueContentSrc = cCsharp;
        // else if ( contentSrc === helloWPath ) trueContentSrc = helloW;
        // else if ( contentSrc === princDifPath ) trueContentSrc = princDif;
        // else if ( contentSrc === unityPath ) trueContentSrc = unity;

        fetch(contentSrc)
            .then(res => res.text())
            .then( text => {
              this.setState({
                isLoaded: true,
                content: text
              })
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

      const database = this.state.database["tutorials"];
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

      let formattedPath = "tutorials";

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

        if ( !this.state.isLoaded ) {
          return (
            <Loader />
          );
        }
        else {
          return (

              <Segment>
                <div className="tutorialContentWrapper">
                  {content ?
                      <ReactMarkdown className="tutorialContent"
                                     renderers={{
                                       code: CodeBlockRenderer,
                                       img: ImageRenderer,
                                       a: LinkRenderer
                                     }}
                                     source={content}
                                     escapeHtml={false}
                      />
                      : <NoTutorial/>}
                </div>
              </Segment>
          );
        }
    }
}

class NoTutorial extends React.Component {

  render() {
    return (
      <span> Oi ! </span>
    );
  }
}

export default TutorialsContent;