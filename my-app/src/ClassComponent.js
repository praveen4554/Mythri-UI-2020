import React, {Component} from 'react';
import ChildComponent from './ChildComponent';
import FormValidations from './FormValidation';
import PureComponent from './PureComponent';
import { InputComponent } from './InputComponent';
import axios from 'axios';
import {NewComponent} from './HocComponent';
import TestComponent from './TestComponent';
import {connect } from 'react-redux';
const HOCEXample = NewComponent(TestComponent);

class StateFulComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          test:'data',
          names:[{
              firstName: 'praveen',
              lastName: 'kumar'
          },{
              firstName: 'praveen1',
              lastName: 'kumar'
          },{
              firstName: 'praveen2',
              lastName: 'kumar'
          }],
          showData: false
      };
      this.changeState = this.changeState.bind(this);
      this.sendPropFunction = this.sendPropFunction.bind(this);
      this.child = this.child.bind(this);
      this.disableRef = React.createRef();
      this.focusRef = React.createRef();
  }
//   componentWillMount() {
//       console.log('will mount');
//   }
  componentDidMount() {
      console.log('DidMount');
      this.focusRef.current.focus();
     this.disableRef.current.disabled = true;
     fetch('https://jsonplaceholder.typicode.com/todos/101')
  .then(response => response.json())
  .then(json => console.log(json)).catch((err)=>{
      console.log(err);
  });

     fetch('https://jsonplaceholder.typicode.com/posts',{
         method: 'POST',
         body:{
             userId: 12,
title: "Mythri"
         }
     })
  .then(response => response.json())
  .then(json => console.log(json)).catch((err)=>{
      console.log(err);
  });
  axios.get('https://jsonplaceholder.typicode.com/todos/101').then((res)=>{
      console.log(res.data);
  }).catch((err)=>{
      console.log(err);
  })
  axios.put('https://jsonplaceholder.typicode.com/posts/1',{
        title:'praveen'
         }).then((res)=>{
            console.log(res);
         }).catch((err)=>{
             console.log(err);
         })
  }
//   componentWillReceiveProps() {
//       console.log('will Receive props');
//   }
//  static getDervivedStateFromProps(props, state) {
//      console.log(props);
//      console.log(state);
//  }
//   shouldComponentUpdate() {
//       console.log('should component update');
//       if(this.state.test === 'praveen')
//          return false;
//       else
//         return true;
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//       console.log(prevProps);
//       console.log(prevState);
//       return prevState;
//   }
//   componentWillUpdate() {
//       console.log('will update');
//   }
//   componentDidUpdate() {
//       console.log('Did update');
//   }
  static getDerivedStateFromError(error) {
      console.log(error);
  }
//   componentDidCatch(error, info){

//   }
  componentWillUnmout() {
      console.log('will Unmount');
  }
  changeState() {
     // console.log(this.state);
    //   if(this.state.test !== 'praveen')
    //   this.setState({test:'praveen'},function(){
    //   console.log(this.state);
    //   });
    //   else 
    //     this.setState({test: 'Mythri'});
    //this.state.test = 'praveen';
    const names = this.state.names;
    names.push({firstName:'abc', lastName:'def'});
    this.setState({names: names, showData: !this.state.showData});
      console.log(this.state);
  }
  child(data) {
      console.log(data);
  }
  sendPropFunction() {
      return this.state.showData
  }
  render() {
     // console.log(this.props);
      return(
          <React.Fragment>
          <HOCEXample/>
          {this.props.userName}
          <InputComponent ref={this.disableRef}/>
          <InputComponent ref={this.focusRef}/>
          <PureComponent data={this.state.test}></PureComponent>
            <ChildComponent name={this.sendPropFunction} data={this.state.names}  childData={this.child}></ChildComponent>
            <button onClick={this.changeState}> updateState</button>
            <button onClick={this.props.changeUserData}>udapteUser</button>
          </React.Fragment>
      )
  }
}
const mapStateToProps = (state) =>{
    console.log(state);
    return {
        userName: state.user
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        changeUserData: () => dispatch({type:'logged', val:'praveen'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StateFulComponent);