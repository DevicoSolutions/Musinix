import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {Window, Content, PaneGroup, Pane, Toolbar} from 'react-photonkit'

import Header from './components/Header'
import Sidebar from './components/Sidebar'

const Footer = () => <Toolbar ptType="footer" />

export default function Root() {
  const store = configureStore()
  return (
    <Provider store={store}>
      <Window>
        <Header />
        <Content>
          <PaneGroup>
            <Sidebar />
            <Pane className="padded-more">
              Hello, react-photonkit!!!
            </Pane>
          </PaneGroup>
        </Content>
        <Footer />
      </Window>
    </Provider>
  )
}
