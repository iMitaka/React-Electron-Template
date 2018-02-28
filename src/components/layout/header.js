import React, { Component } from 'react';
const remote = require('electron').remote;

class Header extends React.Component {
    closeWindow() {
        var window = remote.getCurrentWindow();
        window.minimize();
        // window.hide();
        // window.close();
    }

    maximizeWindow() {
        var window = remote.getCurrentWindow();
        if (window.isMaximized()) {
            window.unmaximize();
        } else {
            window.maximize();
        }
    }

    minimizeWindow() {
        var window = remote.getCurrentWindow();
        window.minimize();
        // window.hide();
        // window.minimize();
    }

    render() {
        return (
            <div className="row header-conatiner">
                <div className="col-md-4">
                    <strong className="window-title">Jarvis Edge</strong>
                </div>
                <div className="col-md-8">
                    <div className="text-right">
                        <button className="btn btn-dark" onClick={this.minimizeWindow}>
                            <i className="fas fa-window-minimize"></i>
                        </button>
                        <button className="btn btn-dark" onClick={this.maximizeWindow}>
                            <i className="far fa-window-maximize"></i>
                        </button>
                        <button className="btn btn-dark close-button" onClick={this.closeWindow}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
