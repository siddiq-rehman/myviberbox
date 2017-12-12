import React from 'react';
import io from 'socket.io-client';
import './css/style.css';
import Title from './Components/Title.jsx'
import MContent from './Components/MContent.jsx'
import MBox from './Components/MBox.jsx'
import Cookies from 'universal-cookie';

import store from './Store/store.jsx';
import $ from 'jquery';
import { connect } from 'react-redux';


@connect((store)=>{
    return {
       
    }
  })


class ChatUI extends React.Component{

constructor(props){
super(props);
var Socket;
this.state={renderIt:true};
this.socketStatus=0;
}

componentWillMount(){
    var UserName,FriendName,Password;
    UserName=sessionStorage.getItem("UserName" );
    FriendName=sessionStorage.getItem("FriendName");
    Password=sessionStorage.getItem("Token" );
    
    try{
     this.Socket = io.connect('http://localhost:3000?UserName='+UserName+'&FriendName='+FriendName+'&Password='+Password);
    }
    catch(e){
        console.log(failede)
        	document.write('<p style="font-size:50px">'+"Chat Server Unavailable.. Please try later"+'!</p>');
        }

        setInterval(()=>{
                if(this.Socket.connected && !this.socketStatus)
                this.setState({renderIt:true});
    
                if(!this.Socket.connected && this.socketStatus)
                this.setState({renderIt:true});    
            }, 1000);

            setInterval(()=>{
                
                var msg1={"UserName":UserName,"FriendName":FriendName,"Password":Password}
                  this.Socket.emit('AuthUser', msg1);
                }, 3000)
}
componentDidMount(){
//console.log("chatUI did mount")
  // console.log(this.props);
    var _this=this;
    this.Socket.on('newmsg', function(data){
     //   console.log("inside callbac",this.props)
        _this.props.dispatch({type:"Message",payload:{gen:"friend",Date:Date.now(),msg:data}}); 
                     
     })

     this.Socket.on('AuthUserRes', function(data){
        //    console.log(data);
              if(data.Authentication==="Fail")
                  document.write('<p style="font-size:50px">'+data.reason+'!</p>');
              else if(data.Authentication==="Success")
              {
                if(data.Friend==="Available")  {
                    _this.props.dispatch({type:"Availablity",payload:"Online"});
                  //  $('.avatar-head').css('border','2px solid rgba(24, 202, 71, 0.7)')
                 //   $('.chat-title .Online').remove();
                  //  $('<h1 class="Online">'+'Online'+'</h1>').appendTo($('.chat-title .Online1'));
                }
              else{
                _this.props.dispatch({type:"Availablity",payload:"Offline"});
                 // $('.chat-title .Online').remove();
                 //       $('.avatar-head').css('border','2px solid rgba(255, 255, 255, 0.24)')		
              }


              }
            });
}




render(){
   // console.log(this.props)
 //  console.log("rendereing the ChattUI")
if(!this.Socket.connected && this.socketStatus){
    this.socketStatus=0;
        return(<p style={{fontSize:50}}>"Chat Server Unavailable.. Please try later!"</p>);
}
   else{
    this.socketStatus=1;
return(
 
<div className="MdivUI">
<div className="chat">
<Title />
<MContent Socket={this.Socket}/>
<MBox Socket={this.Socket}/>
</div>
<div className="bgUI"></div>
</div>

)
   }
}
}

export default ChatUI;