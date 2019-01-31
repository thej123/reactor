import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById('root'));

setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    ReactDOM.render(<App />, document.getElementById('root'));
}, 10000)