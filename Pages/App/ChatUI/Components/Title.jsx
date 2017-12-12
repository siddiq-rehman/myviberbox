import React from 'react';
import  TitleFriend  from './titleComponents/TitleFriend.jsx'
import  TitleUser  from './titleComponents/TitleUser.jsx'
import TitleUserHead from './titleComponents/TitleUserHead.jsx'
import TitleAvatarHead from './titleComponents/TitleAvatarHead.jsx' 
import TitleOnline from './titleComponents/TitleOnline.jsx'
import { connect } from 'react-redux';



@connect((store)=>{
 // console.log("in title",store);
  return {"Availability":store.Availability,Date:Date.now()}
})


class Title extends React.Component{

constructor(props){
super(props)
this.state={}
}

toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

componentWillMount(){
  var UserName,FriendName,Token;
    UserName=sessionStorage.getItem("UserName" );
    FriendName=sessionStorage.getItem("FriendName");
    Token=sessionStorage.getItem("Token" );
    this.setState({UserName:UserName,FriendName:FriendName})
    var _this=this;

    this.toDataURL('http://localhost:7070/ViberBox/SignInServlet?UserName='+UserName+'&Token='+Token, function(dataUrl) {
       if(!localStorage.getItem(UserName))
       localStorage.setItem(UserName, dataUrl); 
      // _this.setState({"loading_Fn":"true"});
     })

     this.toDataURL('http://localhost:7070/ViberBox/SignInServlet?FriendName='+FriendName+'&Token='+Token, function(dataUrl) {
      if(!localStorage.getItem(FriendName))
      localStorage.setItem(FriendName, dataUrl); 
     // _this.setState({"loading_Un":"true"});
    })
	
}

componentDidUpdate(){
  //console.log("component updated");
}

render(){
//	console.log("rendering titl",this.props);
return(

<div className="chat-title">
     <TitleFriend name={this.state.FriendName} />
    <TitleUserHead name={this.state.UserName}/>
    <TitleAvatarHead name={this.state.FriendName} status={this.props.Availability.status}/>
	<TitleUser name={this.state.UserName} />
	<TitleOnline status={this.props.Availability.status} />
</div>

)
}


}

export default Title;