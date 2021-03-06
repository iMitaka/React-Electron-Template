import React, { Component } from 'react';
import Routes from '../routes/routes'
import Header from './layout/header'

class App extends React.Component {
  render() {
    return (
      <div className="container-background bg-dark text-white">
        <header>
          <Header />
        </header>
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}

export default App;
