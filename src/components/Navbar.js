import React, { Component } from 'react'
import logo from '../assets/images/landing-page/itabits-logo.png'

import '../style/Navbar.css'

export default class Navbar extends Component {
  render () {
    return (
      <div className='container'>
        <nav className='navbar navbar-inverse navbar-fixed-top'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
              <a href='/'><img src={logo} id='bits-logo' /></a>
            </div>
            <div className='collapse navbar-collapse' id='myNavbar' style={{marginTop: 8}}>
              <ul className='nav navbar-nav navbar-right'>
                <li><a href='/' style={{color: "#E0E0E0"}}>Início</a></li>
                <li><a href='/projects' style={{color: "#E0E0E0"}}>Projetos</a></li>
                <li><a href='/members' style={{color: "#E0E0E0"}}>Membros</a></li>
                <li><a href='/tutorials' style={{color: "#E0E0E0"}}>Tutoriais</a></li>
              </ul>
              <ul className='nav navbar-nav navbar-right' />
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
