import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Contact extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1>Hello, Contact!</h1>
        <Link className="btn btn-success" to="/">{'<- Back'}</Link>
      </div>
    );
  }
}

export default Contact;
