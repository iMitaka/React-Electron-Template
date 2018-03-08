import React, { Component } from 'react';
import NumberInput from '../../shared/components/number-input'

class RedeemCode extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      code: ''
    }

    this.backButtonClick = this.backButtonClick.bind(this)
    this.validate = this.validate.bind(this)
  }

  backButtonClick() {
    this.props.history.goBack();
  }

  handleNumberChange(number) {
    this.setState({
      code: number
    })
  }

  validate() {
    console.log(this.state.code)
  }

  render() {
    return (
      <div>
        <div className="row" style={{ paddingTop: 40 }}>
          <div className="col-sm-2">
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
        <NumberInput
          onNumberChange={(number) => this.handleNumberChange(number)}
        />
        <hr />
        <div className="row">
          <div className="col-lg-12 text-center">
            <div>
              <button className="btn-lg btn-success" onClick={this.validate}><strong>VALIDTE CODE</strong></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RedeemCode;
