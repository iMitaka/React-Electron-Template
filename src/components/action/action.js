import React, { Component } from 'react';
import ccxt from 'ccxt'
import PageTitle from '../../shared/components/page-title'
import { Link } from 'react-router-dom'

class Action extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            buyPrice: '',
            sellPrice: '',
            avaragePrice: ''
        }

        this.backButtonClick = this.backButtonClick.bind(this)
    }

    componentDidMount() {
        console.log(this.props.match.params)
        this.getTicker();
    }

    getTicker() {
        (async () => {
            const exchange = new ccxt.binance()

            const ticker = await new ccxt.binance().fetchTicker(this.props.match.params.symbol + '/USDT')

            const buy = ticker.bid
            const sell = ticker.ask
            const avarage = (ticker.last + ticker.open) / 2

            this.setState({
                buyPrice: buy.toFixed(2),
                sellPrice: sell.toFixed(2),
                avaragePrice: avarage.toFixed(2)
            })
        })()
    }

    backButtonClick() {
        this.props.history.goBack();
    }

    render() {
        let content = (
            <div className="col-lg-12 text-center">
                <div><h4><strong>Please, wait a moment...</strong></h4></div>
            </div>
        )

        if (this.state.buyPrice && this.state.sellPrice && this.state.avaragePrice) {
            content = (
                <div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div>
                                <h4>
                                    <strong style={{fontSize: '150%'}}>{this.props.match.params.currency} <i className={'fab fa-' + this.props.match.params.currency.toLowerCase()}></i></strong>
                                </h4>
                            </div>
                            <div style={{fontSize: '150%'}}><strong>{this.state.avaragePrice} $</strong></div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="button-container bg-danger">
                                <h4><strong>{'>>  BUY  <<'}</strong></h4>
                                <hr />
                                <strong style={{fontSize: '150%'}}>{this.state.buyPrice} $</strong>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="button-container bg-success">
                                <h4><strong>{'>>  SELL  <<'}</strong></h4>
                                <hr />
                                <strong style={{fontSize: '150%'}}>{this.state.sellPrice} $</strong>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-2">
                            <button className="btn-lg btn-secondary" onClick={this.backButtonClick}><i className="fas fa-arrow-circle-left"></i></button>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="center-conatiner">
                {content}
            </div>
        );
    }
}

export default Action;
