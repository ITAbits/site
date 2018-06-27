import React  from 'react';
import LazyLoad from 'react-lazy-load';
// import LegitImage from 'legit-image';
import {Image} from 'semantic-ui-react';

class ImageLoader extends React.Component{

  getProps({src, alt, title}){
    return ({
      src: `https://rexxars.github.io/react-layout-pack/img/${src}`,
      alt: alt.replace(/\(\d+\)$/, ''),
      title: title,
      height: alt.replace(/.*\((\d+)\)$/, '$1') | 0
    });
  }

  render() {
    console.log("CHEGOUU NA IMAGE");
    const {src, alt, title, height} = this.getProps(this.props);
    return (
        <div className="image-wrapper">
          <div className="description">{title}</div>

          <LazyLoad height={height || null}>
            <Image src={src} alt={alt} />
          </LazyLoad>
        </div>
    );
  }
}

export default ImageLoader;