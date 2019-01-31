import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
        this.setState({data: e.target.value});
    }
    //Whenever we need to update state from child component, we need to pass the function that will 
    //handle updating (updateState) as a prop (updateStateProp).
    render() {
        return (
            <div>
                <Content myDataProp = {this.state.data}
                    updateStateProp = {this.updateState}></Content>
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