import React, { Component } from 'react';
import ccxt from 'ccxt'
import PageTitle from '../../shared/components/page-title'
import { Link } from 'react-router-dom'

const exchange = new ccxt.binance()

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
        this.getTicker();
    }

    getTicker() {
        (async () => {
            let ticker = await exchange.fetchTicker(this.props.match.params.symbol + '/USDT')

            let avarage = (ticker.last + ticker.open) / 2

            this.setState({
                buyPrice: ticker.ask.toFixed(2),
                sellPrice: ticker.bid.toFixed(2),
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
                                    <strong style={{ fontSize: '150%' }}>{this.props.match.params.currency} <i className={'fab fa-' + this.props.match.params.currency.toLowerCase()}></i></strong>
                                </h4>
                            </div>
                            <div style={{ fontSize: '150%' }}><strong>{this.state.avaragePrice} $</strong></div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="button-container bg-danger">
                                <h4><strong>{'>>  BUY  <<'}</strong></h4>
                                <hr />
                                <strong style={{ fontSize: '150%' }}>{this.state.buyPrice} $</strong>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="button-container bg-success">
                                <h4><strong>{'>>  SELL  <<'}</strong></h4>
                                <hr />
                                <strong style={{ fontSize: '150%' }}>{this.state.sellPrice} $</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="row" style={{ paddingTop: 40 }}>
                    <div className="col-sm-2">
                        <button className="btn-lg btn-secondary" onClick={this.backButtonClick} style={{ width: '50%' }}><i className="fas fa-arrow-circle-left"></i></button>
                    </div>
                </div>
                <div className="center-conatiner">
                    {content}
                </div>
            </div>
        );
    }
}

export default Action;
