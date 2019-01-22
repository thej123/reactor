import React, { Component } from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    "id":1,
                    "name":"Foo",
                    "age":"20"
                },
                {
                    "id":2,
                    "name":"Bar",
                    "age":"30"
                },
                {
                    "id":3,
                    "name":"Baz",
                    "age":"40"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} data = {person}/>)}
                    </tbody>
                </table>
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

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default App;