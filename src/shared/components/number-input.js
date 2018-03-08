import React, { Component } from 'react';

const UNDO_SYMBOL = '<<'

class NumberInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputButtons: [],
            code: ''
        }

        this.handleNumberChange = this.handleNumberChange.bind(this)
    }

    componentDidMount() {
        let inputNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', UNDO_SYMBOL]
        let inputButtons = inputNumbers.map((number, index) => {
            return (
                <div key={index} className="col-sm-4" style={{ paddingBottom: '2vh' }}>
                    <button
                        className="btn-lg btn-secondary"
                        style={{ width: '100%' }}
                        onClick={() => this.handleNumberChange(number)}><strong>{number}</strong></button>
                </div>
            )
        })

        this.setState({
            inputButtons: inputButtons
        })
    }

    handleNumberChange(number) {
        let code = this.state.code
        if (number == UNDO_SYMBOL) {
            code = code.slice(0, -1)
        } else {
            code += number
        }

        this.setState({
            code: code
        })

        this.props.onNumberChange(code)
    }

    render() {
        return (
            <div>
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
                            {this.state.inputButtons}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NumberInput;
