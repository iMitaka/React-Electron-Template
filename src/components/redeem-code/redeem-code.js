import React, { Component } from 'react';

class RedeemCode extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputButtons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '<<'],
      code: ''
    }

    this.backButtonClick = this.backButtonClick.bind(this)
  }

  backButtonClick() {
    this.props.history.goBack();
  }

  handleNumberChange(number) {
    let code = this.state.code
    if (number == '<<') {
      code = code.slice(0, -1)
    } else {
      code += number
    }

    this.setState({
      code: code
    })
  }

  render() {
    let numberInputButtons = this.state.inputButtons.map((number, index) => {
      return (
        <div key={index} className="col-sm-4" style={{ paddingBottom: '2vh' }}>
          <button
            className="btn-lg btn-secondary"
            style={{ width: '100%' }}
            onClick={() => this.handleNumberChange(number)}><strong>{number}</strong></button>
        </div>
      )
    })

    return (
      <div>
        <div className="row" style={{ paddingTop: 40 }}>
          <div className="col-lg-2">
            <button className="btn-lg btn-secondary" onClick={this.backButtonClick} style={{ width: '50%' }}><i className="fas fa-arrow-circle-left"></i></button>
          </div>
        </div>
        <div className="row center-conatiner">
          <div className="col-lg-12 text-center">
            <div>
              <h4>
                <strong style={{ fontSize: '150%' }}>REDEEM CODE</strong>
              </h4>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div>
              <input className="form-control" disabled style={{ textAlign: 'center', fontWeight: 'bold' }} value={this.state.code}></input>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="row">
              {numberInputButtons}
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12 text-center">
            <div>
              <button className="btn-lg btn-success"><strong>VALIDTE CODE</strong></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RedeemCode;
