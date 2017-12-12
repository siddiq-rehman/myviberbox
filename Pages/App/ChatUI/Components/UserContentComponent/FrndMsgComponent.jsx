import React from 'react'
import { Figure } from './FigureComp/Figure.jsx'

export class FrndMsgComponent extends React.Component{

render(){
   // console.log(this.props);
    return(
        <div className="message">
        <Figure fig="FriendName"/>
        {this.props.msg}
        </div>
        
    )
}

}