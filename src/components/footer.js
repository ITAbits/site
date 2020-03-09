import React from 'react'
import '../style/Footer.css'
import logo from '../assets/images/landing-page/itabits-logo.png'

import facebook from '../assets/images/footer/facebook.png'
import linkedin from '../assets/images/footer/linkedin.png'
import github from '../assets/images/footer/github.png'

export default props => {
  return <div>
    <footer className='container-fluid text-center foot' style={{paddingTop: 12, paddingBottom: 12}}>
      <div className='copyrights'>
        <p className='white-txt'>ITABits © 2020
          <br /><br />
          <img className='footimg' src={logo} alt='Logo' />
        </p>
        <a href='https://www.facebook.com/itabits/'><img className='icon' src={facebook} alt='Logo' /></a>
        <a href='https://www.linkedin.com/company/itabits/'><img className='icon' src={linkedin} alt='Logo' /></a>
        <a href='https://github.com/ITAbits'><img className='icon' src={github} alt='logo' /></a>
        <br /><br />
        <p className='white-txt-small'>
          ITABits - Desenvolvimento de Software feito por alunos do ITA!
        </p>
      </div>
    </footer>
  </div>
}
