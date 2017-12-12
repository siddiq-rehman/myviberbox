import React from 'react';
import { connect } from 'react-redux';

@connect((store)=>{
  //console.log("STORE HERE",store)
  return {
 
  }
})



class MBox extends React.Component{

constructor(props){
super(props)
var UserName,FriendName,Password;
this.state={
  userInput:''
}
this.handleOnChange=this.handleOnChange.bind(this);
this.handleClickEvent=this.handleClickEvent.bind(this);
this.handleKeyPress=this.handleKeyPress.bind(this);
this.handleDispatcher=this.handleDispatcher.bind(this);
this.socketHandler=this.socketHandler.bind(this);
}

textAreaAdjust(e){
  e.target.style.height = "1px";
  e.target.style.height = (0+e.target.scrollHeight)+"px";
}

handleClickEvent(e){
  if(jobValue !== '')
  this.handleDispatcher();
  this.setState({userInput:''})
}

handleKeyPress(e){
  if (e.which == 13) {
    var jobValue = this.state.userInput
    if(jobValue !== '')
    this.handleDispatcher();
    return false;
  }
}

handleDispatcher(){
  //console.log("message being sent here")
  this.props.dispatch({type:"Message",payload:{gen:"user",Date:Date.now(),msg:this.state.userInput}});
  this.socketHandler();
}

socketHandler(){

  let msg1={"message": this.state.userInput, "UserName":this.UserName,"FriendName":this.FriendName }
        if(msg1){
            this.props.Socket.emit('msg', msg1);
        }
        this.setState({userInput:''})

}


handleOnChange(e){
  this.setState({'userInput':e.target.value})
}



componentDidMount(){ 
  this.UserName=sessionStorage.getItem("UserName" );
  this.FriendName=sessionStorage.getItem("FriendName");
  this.Password=sessionStorage.getItem("Token" );
  var _this=this;
  $(window).on('keydown',_this.handleKeyPress);
//  console.log(_this.props);
}



render(){
  //console.log("rendering message box");
return(
<div className="message-box-UI">
  <textarea ref="textArea" type="text" onChange={this.handleOnChange} onKeyUp={this.textAreaAdjust} value={this.state.userInput} className="message-input-UI" placeholder="Type message..."></textarea>
    <button type="submit" onClick={this.handleClickEvent} className="message-submit_UI">Send</button>
</div>
)
}
}

export default MBox;