import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from '../assets/images/landing-page/itabits-logo.png'
import {NavLink} from 'react-router-dom'

import '../style/Navbar.css'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <div>
        <nav className='navbar navbar-inverse navbar-fixed-top navbar-custom'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
              <a className='navbar-brand' href='#'><img id='bits-logo' src={logo} /></a>
            </div>
            <div className='collapse navbar-collapse' id='myNavbar'>
              <ul className='nav navbar-nav navbar-right'>
                <li><a href='/'>Home</a></li>
                <li><a href='/tutorials'>Tutoriais</a></li>
                <li><a href='/projects'>Projetos</a></li>
                <li><a href='/members'>Membros</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
