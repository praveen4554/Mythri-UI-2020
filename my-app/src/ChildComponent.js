import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ChildComponent extends React.Component {
  constructor(props) {
      super(props);
      this.sendData = this.sendData.bind(this);
  }
  sendData() {
     // console.log(this.state);
      this.props.childData('data from child');
  }

 static getDervivedStateFromProps(props, state) {
     console.log(props);
     console.log(state);
 }
 componentDidUpdate() {
     console.log('normal component');
 }
 static getDerivedStateFromError(){
     console.log('error');
 }
//  componentDidCatch(error, info) {
//      console.log(error);
//  }
  render() {
      const list = this.props.data.map((data, index)=>{
          return <li key={index}>{data.firstName}{data.lastName}</li>
      })
      return(
          <div>
          {this.props.name()}
            <ul>
            {list}
            </ul>
            <button onClick={this.sendData}> send Data TO Parent Component</button>
          </div>
      )
  }
}

ChildComponent.propTypes = {
    data: PropTypes.array.isRequired
}
ChildComponent.defaultProps = {
    data : [{firstName:'praveen',lastName:'kumar'}]
}