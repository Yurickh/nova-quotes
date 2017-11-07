import React, { Component } from 'react'
import MessageList from '../../components/message-list'

import './styles.css'

class App extends Component {
  render() {
    return (
      <div className="page-app">
        <header className="header">
          <h1 className="brand">NovaQuotes</h1>
          <h3 className="description">A collection of the most inspiring quotes by Novatics</h3>
        </header>
        <MessageList />
        <footer className="footer">
          Made with
          <span
            role="img"
            aria-label="love"
          >❤️</span>
          by
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://github.com/Yurickh"
            className="reference"
          >Yurick</a>
        </footer>
      </div>
    )
  }
}

export default App
