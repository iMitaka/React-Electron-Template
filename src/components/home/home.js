import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1>Hello, Home!</h1>
        <Link className="btn btn-success" to="/contact">Contacts</Link>
      </div>
    );
  }
}

export default Home;
