/** @flow */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Toolbar, Actionbar, Button, ButtonGroup} from 'react-photonkit'

class Header extends Component {

  render() {
    return (
      <Toolbar title="Musinix">
        <Actionbar>
          <ButtonGroup>
            <Button glyph="left-open-big" />
            <Button glyph="play" />
            <Button glyph="right-open-big" />
          </ButtonGroup>
        </Actionbar>
      </Toolbar>
    )
  }
}

export default connect(
  ({player}) => ({player})
)(Header)
