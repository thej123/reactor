import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='home'>Home</Link></li>
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
export default Menu;

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home...</h1>
            </div>
        )
    }
}

export class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About...</h1>
            </div>
        )
    }
}

export class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact...</h1>
            </div>
        )
    }
}