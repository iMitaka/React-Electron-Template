import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import './site.css'
import 'bootstrap/dist/css/bootstrap.css';

document.title = "Jarvis Edge"
// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = "root";
document.body.appendChild(root);

// Add FontAwesome
let fontAwsome = document.createElement('script');
fontAwsome.src = 'https://use.fontawesome.com/releases/v5.0.7/js/all.js'
document.body.appendChild(fontAwsome);

// Now we can render our application into it
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
