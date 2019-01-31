import React from 'react';
import PropTypes from 'prop-types';

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
            datatwo: [],
            header: "Header from state...",
            content: "Content from state...",
            headerProp: "Header from props...",
            contentProp: "Content from props..."
        }

        //setState() method is used to update the state of the component. This method will not replace the state, 
        //but only add changes to the original state.
        this.setStateHandler = this.setStateHandler.bind(this);

        //Sometimes we might want to update the component manually. This can be achieved using the forceUpdate() method.
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };

    setStateHandler() {
        let item = "setState..."
        let myArray = this.state.datatwo.slice();
            myArray.push(item);
        this.setState({datatwo: myArray})
    };

    forceUpdateHandler() {
        this.forceUpdate()
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
                
                <button onClick = {this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.datatwo}</h4>

                <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
                <h4>Random Number: {Math.random()}</h4>
                
                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                <h3>Func: {this.props.propFunc}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject.objectName1}</h3>
                <h3>Object: {this.props.propObject.objectName2}</h3>
                <h3>Object: {this.props.propObject.objectName3}</h3>
                
                <h2>{1+1}</h2>
                {/*Multi line comment...*/}
                <Content contentProp = {this.state.contentProp}/>
                <h2>{this.state.content}</h2>
            </div>
        )
    }
}

// App.propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, 
// we will get a console warning.

App.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.object
}

// After the validation patterns, we will set App.defaultProps.

App.defaultProps = {
    // headerProp: "Header from props...",
    // contentProp: "Content from props...",
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunc: function(e){return e},
    propNumber: 1,
    propString: "String value...",

    propObject: {
        objectName1: "objectValue1",
        objectName2: "objectValue2",
        objectName3: "objectValue3",
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