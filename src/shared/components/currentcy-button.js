import React, { Component } from 'react';

class CurrencyButton extends React.Component {
    render() {
        return (
            <div className="col-sm-4 text-center" onClick={() => this.props.onClick(this.props.currencyName)}>
                <div className={this.props.containerClassName}>
                    <i className={this.props.iconClassName}></i>
                    <hr />
                </div>
                <div>( <strong>{this.props.currencyName}</strong> )</div>
            </div>
        );
    }
}

export default CurrencyButton;
