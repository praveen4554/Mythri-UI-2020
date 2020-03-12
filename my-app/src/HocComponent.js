import React, {Component} from 'react';
export const NewComponent = (BaseComponent)=>{
    class UpdatedComponent extends React.Component {
        render(){
            return(
                <div>
                HOC
                <BaseComponent/>
                </div>
            )
        }
    }
    return UpdatedComponent;
}