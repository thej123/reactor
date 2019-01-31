import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    };
    updateState(e) {
        this.setState({data: e.target.value});
    }

    clearInput() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    //Whenever we need to update state from child component, we need to pass the function that will 
    //handle updating (updateState) as a prop (updateStateProp).
    render() {
        return (
            <div>
                <Content myDataProp = {this.state.data}
                    updateStateProp = {this.updateState}
                ></Content>

                {/* ClearInput function searches for element with ref = "myInput" value, resets the state, and adds focus to it after the button is clicked. */}
                <input value = {this.state.data} onChange = {this.updateState} 
                    ref = "myInput"></input>
                <button onClick = {this.clearInput}>CLEAR</button>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value = {this.props.myDataProp}
                    onChange = {this.props.updateStateProp} />
                <h3>{this.props.myDataProp}</h3>
            </div>
        )
    }
}

export default Form