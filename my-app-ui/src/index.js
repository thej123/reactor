import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import './index.css'
import App from "./App.jsx";
import {Home,About,Contact} from './Menu'


ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {App} />
            <Route path = "/home" component = {Home} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
            <Redirect path = "*" to = '/' />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));

// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'));
//     ReactDOM.render(<App />, document.getElementById('root'));
// }, 10000)