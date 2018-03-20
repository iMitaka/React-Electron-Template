import React, { Component } from 'react';
import CurrencyButton from '../../shared/components/currentcy-button'
import PageTitle from '../../shared/components/page-title'
import { Link } from 'react-router-dom'

import rpc from 'json-rpc2';
import QrReader from 'react-qr-reader'
import QRCode from 'qrcode.react';

const client = rpc.Client.$create(3456, '80.72.82.160');

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
    }
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data) {
    if (data) {
      alert(data)
      this.setState({
        result: data,
      })
    }
  }
  handleError(err) {
    console.error(err)
  }

  currencyHandler(currency) {
    let symbol;
    if (currency === 'Bitcoin') {
      symbol = 'BTC'
    } else if (currency === 'Ethereum') {
      symbol = 'ETH'
    }

    this.props.history.push('/action/' + currency + '/' + symbol)
  }

  componentDidMount() {
    client.call('getPairs', [], function (err, result) {
      console.log(JSON.stringify(result, null, 4));
    });
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
        <div className="row" style={{ padding: 25 }}>
          <div className="col-lg-2 offset-md-2 text-center">
            <QrReader
              delay={this.state.delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-lg-5 offset-md-2 text-center">
            <QRCode value="http://facebook.github.io/react/" style={{width: 256, height: 256}} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
