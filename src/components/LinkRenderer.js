import React from 'react';
import {Link} from 'react-router-dom';

class LinkRenderer extends React.Component{

  render() {
    console.log("CHEGOU NO LINKK");
    if (this.props.href.match(/^(https?:)?\/\//)) {
      return (
          <a href={this.props.href} target="_blank">
            {this.props.children} <sup>☁</sup>
          </a>
      );
    }

    return <Link to={this.props.href}>{this.props.children}</Link>;
  }
}

export default LinkRenderer;
