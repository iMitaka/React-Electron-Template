import React, { Component } from 'react';

class PageTitle extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h2><strong>{this.props.text}</strong></h2>
                <br />
                <br />
            </div>
        );
    }
}

export default PageTitle;
