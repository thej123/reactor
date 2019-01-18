import React, { Component } from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <h2>{1+1}</h2>
                {/*Multi line comment...*/}
                <Content/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        var myStyle = {
            frontSize: 100,
            color: '#FF0000'
        }
        var i = 1;
        return (
            <div>
                <h1 style = {myStyle}>{i == 1 ? 'True!' : 'False'}</h1>
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <p data-myattribute = "somevalue">This is the content!!!</p>
            </div>
        )
    }
}

export default App;