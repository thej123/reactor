import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ContentTwo from './ContentTwo';
import Form from './Forms';
import Menu from './Menu';
import MyHOC from './myHOC';

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
            myNumber: 0,
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

        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
        this.setNewNumber = this.setNewNumber.bind(this);
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

    findDomNodeHandler() {
        let myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }

    setNewNumber() {
        this.setState({myNumber: this.state.myNumber + 1});
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <Header headerProp = {this.state.headerProp}/>

                Menu: <Menu></Menu>

                myHOC: <MyHOC></MyHOC>

                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} componentData = {person}/>)}
                    </tbody>
                </table>
                
                <button onClick = {this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.datatwo}</h4>

                <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
                <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
                <div id = "myDiv">Random Number: {Math.random()}</div><br/>

                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <ContentTwo theNumber = {this.state.myNumber}></ContentTwo>

                <Form></Form>
                
                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                <h3>Func: {this.props.propFunc("my function")}</h3>
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
    propString: PropTypes.string
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
                <td>{this.props.componentData.id}</td>
                <td>{this.props.componentData.name}</td>
                <td>{this.props.componentData.age}</td>
            </tr>
        );
    }
}

export default App;