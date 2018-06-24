import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from '../assets/images/landing-page/logo.png'


export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu color='blue' fixed="top" inverted>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >
            <img src={logo} />
          </Menu.Item>
          <Menu.Item
            name='Projetos'
            active={activeItem === 'Projetos'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Tutoriais'
            active={activeItem === 'Tutoriais'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Membros'
            active={activeItem === 'Membros'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}
