import React from 'react'
import GifPlayer from 'react-gif-player'

export default props => {
  let demoBtn = null
  if (props.demo !== '') {
    demoBtn = (<a className='waves-effect waves-light btn' target='_blank' href={props.demo}><i className='material-icons right'>present_to_all</i> demo</a>)
  }
  return (
    <div className='card col m6 s12 l4'>
      <div className='card-image waves-effect waves-block waves-light'>
        <GifPlayer className='project-image' gif={props.gif} still={props.src} />
      </div>
      <div className='card-content'>
        <span className='card-title activator'>{props.title}<i className='material-icons right'>add</i></span>
        <a className='waves-effect waves-light btn' target='_blank' href={props.code}><i className='material-icons right'>developer_mode</i> code</a>
        {demoBtn}
      </div>

      <div className='card-reveal'>
        <span className='card-title card-open'>{props.title}<i className='material-icons right'>close</i></span>
        <hr />
        <p className='card-info'>{props.info}</p>
        <p className='card-info'><strong>Made by: </strong> {props.developers}</p>
        <a className='waves-effect waves-light btn' target='_blank' href={props.code}><i className='material-icons right'>developer_mode</i> code</a>
        {demoBtn}
      </div>
    </div>
  )
}
