/** @flow */
import React, {Component} from 'react'
import { Pane, NavGroup, NavTitle, NavGroupItem } from 'react-photonkit'

class Sidebar extends Component {
  onSelect(index) {
    console.log(`sidebar clicked with ${index}`)
  }

  render() {
    return (
      <Pane ptSize="sm" sidebar>
        <NavGroup activeKey={1} onSelect={this.onSelect}>
          <NavTitle>Musinix</NavTitle>
          <NavGroupItem eventKey={1} glyph="home" text="Home" />
          <NavGroupItem eventKey={2} glyph="star" text="Favorites" />
          <NavTitle>Play Music</NavTitle>
          <NavGroupItem eventKey={3} glyph="note" text="Library" />
          <NavGroupItem eventKey={4} glyph="users" text="Artists" />
          <NavGroupItem eventKey={5} glyph="music" text="Albums" />
        </NavGroup>
      </Pane>
    )
  }
}

export default Sidebar