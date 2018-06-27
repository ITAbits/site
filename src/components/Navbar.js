import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from '../assets/images/landing-page/itabits-logo.png'
import {NavLink} from 'react-router-dom'

import "../style/NavBar.css";

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <div id="navBar">
        <Menu id="navBarMenu" color='blue' fixed="top" inverted>
          <Menu.Item
            as={NavLink} to='/'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <img src={logo} />
          </Menu.Item>
          <Menu.Item
            as={NavLink} to='/projects'
            name='PROJETOS'
            active={activeItem === 'Projetos'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink} to='/tutorials'
            name='TUTORIAIS'
            active={activeItem === 'Tutoriais'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink} to='/members'
            name='MEMBROS'
            active={activeItem === 'Membros'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}