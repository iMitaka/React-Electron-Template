import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, Home!</h1>
        <Link to="/contact">Contacts</Link>
      </div>
    );
  }
}

export default Home;
