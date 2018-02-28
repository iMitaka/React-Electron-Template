import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ccxt from 'ccxt'
import CurrencyButton from '../../shared/components/currentcy-button'
import PageTitle from '../../shared/components/page-title'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
    // this.getTicker()

    // setInterval(() => {
    //   this.getTicker()
    // }, 5000)

    this.getBalance()
  }

  getBalance() {
    (async () => {

      // instantiate the exchange
      let exchange = new ccxt.binance({
        "apiKey": "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A",
        "secret": "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j",
      })


      try {

        // fetch account balance from the exchange
        let balance = await exchange.fetchBalance()

        // output the result
        console.log(exchange.name.green + ' balance: ' + balance)

      } catch (e) {

        if (e instanceof ccxt.DDoSProtection || e.message.includes('ECONNRESET')) {
          console.log('[DDoS Protection] ' + e.message)
        } else if (e instanceof ccxt.RequestTimeout) {
          console.log('[Request Timeout] ' + e.message)
        } else if (e instanceof ccxt.AuthenticationError) {
          console.log('[Authentication Error] ' + e.message)
        } else if (e instanceof ccxt.ExchangeNotAvailable) {
          console.log('[Exchange Not Available Error] ' + e.message)
        } else if (e instanceof ccxt.ExchangeError) {
          console.log('[Exchange Error] ' + e.message)
        } else if (e instanceof ccxt.NetworkError) {
          console.log('[Network Error] ' + e.message)
        } else {
          throw e;
        }
      }

    })()
  }

  getTicker() {
    const exchange = new ccxt.binance()
    const symbol = 'ETH/BTC'

    exchange.fetchTicker(symbol)
      .then(ticker => {
        const text = [
          exchange.id,
          symbol,
          JSON.stringify(ticker, undefined, '\n\t')
        ]
        console.log(text.join(' '))
      })
  }

  currencyHandler(currency) {
    alert("You have clicked on: " + currency)
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
            iconClassName="fas fa-money-bill-alt dollar-big-symbol"
            currencyName="USD"
            onClick={(currency) => this.currencyHandler(currency)}
          />
        </div>
      </div>
    );
  }
}

export default Home;
