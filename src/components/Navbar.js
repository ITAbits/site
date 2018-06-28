import React, { Component } from 'react'
import logo from '../assets/images/landing-page/itabits-logo.png'

import '../style/Navbar.css'

export default class Navbar extends Component {
  render () {
    return (
      <div class='container'>
        <nav className='navbar navbar-inverse navbar-fixed-top'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
              <img src={logo} id='bits-logo' />
            </div>
            <div className='collapse navbar-collapse' id='myNavbar'>
              <ul className='nav navbar-nav navbar-right'>
                <li><a href='/'>Home</a></li>
                <li><a href='/projects'>Projetos</a></li>
                <li><a href='/members'>Membros</a></li>
                <li><a href='/tutorials'>Tutoriais</a></li>
              </ul>
              <ul className='nav navbar-nav navbar-right' />
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
