import React from 'react';
import ReactDOM from 'react-dom';
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { UserMsgComponent } from './UserContentComponent/UserMsgComponent.jsx'
import { FrndMsgComponent } from './UserContentComponent/FrndMsgComponent.jsx'

@connect((store)=>{
    return {
        Messages:store.Message
    }
  })

class MContent extends React.Component{

constructor(props){
super(props)
}


componentDidUpdate(){
    this.scrollComponent.scrollToBottom();
    }
componentDidMount(){
    //    console.log("MContent",this.props)

     // 
    
        
    }


render(){
    console.log("rendeeing message content")
    const messageComponents =this.props.Messages.map((message,index)=>{  
        if(message.gen==="user")
        return <UserMsgComponent  key={message.Date} {...message} />
        else
        return <FrndMsgComponent  key={message.Date} {...message} />

        })
    if(this.props.Messages.length >0)
return(
<div className="messages">
 <div ref="messages_content" className="messages-content">
 <Scrollbars ref={sb => { this.scrollComponent = sb }}  style={{ height: 343 }}>
 { messageComponents }
 </Scrollbars>
 </div>
</div>
)
else
return(    
    <div className="messages">
     <div ref="messages_content" className="messages-content">
     </div>
    </div>
    )
}
}

export default MContent;