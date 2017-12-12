import React from 'react'
import { Figure } from './FigureComp/Figure.jsx'

export class UserMsgComponent extends React.Component{

render(){
   // console.log(this.props);
    return(
        <div className="message message-personal">
        <Figure fig="UserName"/>
        {this.props.msg}
        </div>
        
    )
}

}