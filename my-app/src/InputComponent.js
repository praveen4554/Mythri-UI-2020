import React, {Component} from 'react';

// export default class InputComponent extends React.Component {
//     constructor() {
//         super();
//         this.textInput = React.createRef();
//     }
//     componentDidMount() {
//         console.log(this.textInput);
//        // this.textInput.current.disabled = true;
//         this.textInput.current.value = "praveen";
//         this.textInput.current.focus();
//     }
//     render() {
//         return(
//             <div>
//             <input type="text" ref={this.textInput}/>
//             </div>
//         )
//     }
// }

export const InputComponent = React.forwardRef((props,ref)=>{
          return(
            <div>
            <input type="text" ref={ref}/>
            </div>
        )
})