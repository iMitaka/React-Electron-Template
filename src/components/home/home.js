import React, { Component } from 'react';
import CurrencyButton from '../../shared/components/currentcy-button'
import PageTitle from '../../shared/components/page-title'
import { Link } from 'react-router-dom'

class Home extends React.Component {

  currencyHandler(currency) {
    let symbol;
    if (currency === 'Bitcoin') {
      symbol = 'BTC'
    } else if (currency === 'Ethereum') {
      symbol = 'ETH'
    }

    this.props.history.push('/action/' + currency + '/' + symbol)
  }

  render() {
    return (
      <div className="center-conatiner">
        <PageTitle
          text="Please choose your currency:"
        />
        <div className="row">
          <CurrencyButton
            containerClassName="bitcoin-container"
            iconClassName="fab fa-bitcoin bitcoin-big-symbol"
            currencyName="Bitcoin"
            onClick={(currency) => this.currencyHandler(currency)}
          />
          <CurrencyButton
            containerClassName="ethereum-container"
            iconClassName="fab fa-ethereum ethereum-big-symbol"
            currencyName="Ethereum"
            onClick={(currency) => this.currencyHandler(currency)}
          />
          <CurrencyButton
            containerClassName="dollar-container"
            iconClassName="fas fa-chart-bar jarvis-big-symbol"
            currencyName="Jarvis Coin"
          />
        </div>
        <div className="row redeem-code-conatiner">
          <div className="col-lg-12 text-center">
            <Link to="/redeem-code" className="btn-lg btn-info"><strong>REDEEM CODE</strong></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
