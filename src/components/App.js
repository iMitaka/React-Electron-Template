import React, { Component } from 'react';
import './App.css';
import Routes from '../routes/routes'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Routes />
      </div>
    );
  }
}

export default App;
