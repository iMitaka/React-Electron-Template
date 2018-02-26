import React, { Component } from 'react';
import './App.css';
import Routes from '../routes/routes'
import 'bootstrap/dist/css/bootstrap.css';

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
