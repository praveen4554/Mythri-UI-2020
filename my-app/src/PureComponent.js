import React, {Component} from 'react';


export default class PureComponent extends React.PureComponent {
    constructor(props){
       super(props);
    }
    componentDidUpdate() {
        console.log('pure component');
    }
    render(){
        return(
            <div>{this.props.data}</div>
        )
    }
}