import React from 'react'
import logo from '../assets/images/landing-page/itabits-logo.png'

import '../style/Header.css'

export default props => {
  return (
    <div id='header-container' style={{textAlign: 'center'}}>
        <img className="animate-reveal animate-second logo-image" src={logo} />
        <div className="typewriter">
          <h1>itabits</h1>
        </div>
    </div>
  )
}
