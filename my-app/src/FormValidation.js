import React, {Component} from 'react';

export default class FormValidations extends React.Component {
    constructor() {
        super();
        this.state = {
            userName : '',
            password: '',
            userNameError: false,
            passwordError: false
        };
        this.handleChangeUserEvent = this.handleChangeUserEvent.bind(this);
    }
    handleChangeUserEvent(event) {
        const error = `${event.target.name}Error`;
        if(event.target.value.length < 10) {
        this.setState({[event.target.name]: event.target.value, [error]: true});
        } else {
        this.setState({[event.target.name]: event.target.value, [error]: false});
        }
    }
    render(){
        return(
            <form>
             <div>
             <input type="text" name="userName" value={this.state.userName} placeholder="please enter your user name"
              onChange={this.handleChangeUserEvent}/>
              {this.state.userNameError? <div>username should be greater than 10 digits</div>:''}
             </div>
             <div>
             <input type="password" name="password" value={this.state.password} placeholder="please enter your password"
              onChange={this.handleChangeUserEvent}/>
              {this.state.userNameError? <div>password should be greater than 10 digits</div>:''}
             </div>
             <input type="submit"/>
            </form>
        )
    }
}