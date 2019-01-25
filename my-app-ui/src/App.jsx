import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
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
            ],
            header: "Header from state...",
            content: "Content from state...",
            headerProp: "Header from props...",
            contentProp: "Content from props..."
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <Header headerProp = {this.state.headerProp}/>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} data = {person}/>)}
                    </tbody>
                </table>
                <h2>{1+1}</h2>
                {/*Multi line comment...*/}
                <Content contentProp = {this.state.contentProp}/>
                <h2>{this.state.content}</h2>
            </div>
        )
    }
}

// App.defaultProps = {
//     headerProp: "Header from props...",
//     contentProp: "Content from props..."
// }

class Header extends React.Component {
    render() {
        var myStyle = {
            frontSize: 100,
            color: '#FF0000'
        }
        var i = 1;
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
                <h1 style = {myStyle}>{i === 1 ? 'True!' : 'False'}</h1>
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <p data-myattribute = "somevalue">This is the content!!!</p>
                <h2>{this.props.contentProp}</h2>
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