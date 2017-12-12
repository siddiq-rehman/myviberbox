import React from 'react';
import { NavLink } from 'react-router-dom'
import './css/style.css'
import axios from 'axios';
import  querystring from 'querystring';
import { Observable, BehaviorSubject } from '@reactivex/rxjs';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class SignIn extends React.Component {
constructor(props){
super(props)
this.state={}
this.handleInputChange=this.handleInputChange.bind(this);
this.signInFunction=this.signInFunction.bind(this);
}


handleInputChange(e){
this.setState({[e.target.name]: e.target.value})
}


signInFunction(e){
const _this=this;
e.preventDefault();
console.log("inside the function", this.state);


axios.post('http://localhost:7070/ViberBox/SignInServlet', JSON.stringify(this.state),{withCredentials: true})
  .then(function (response) {
	console.log(_this.props)
    console.log(response);
    sessionStorage.setItem("UserName",response.data.UserName );
    sessionStorage.setItem("FriendName",response.data.FriendName );
    sessionStorage.setItem("Token",response.data.Password );
    

 
	_this.props.history.push("/ChatUI")
  })
  .catch(function (error) {
    console.log(error);
  });
}


render() {
   console.log("render function");
      return (
<div className="Mdiv">
<div className="main">
<div className="uppermain"><p>VIBER BOX</p></div>
<div className="innermain">

<div className="Un">User Name: <input className="InpUn" type="text" name="UserName" placeholder="UserName" onChange={this.handleInputChange}></input></div>
<div className="Fn">Friend Name:<input className="InpFn" type="text" name="FriendName" placeholder="FriendName" onChange={this.handleInputChange}></input></div>
<div className="Pwd">Password: <input className="InpPwd" type="password" name="Password" placeholder="Password" onChange={this.handleInputChange}></input></div>
<div><button type="submit" className="message-submit" onClick={this.signInFunction}>Sign in</button></div>

<div className="Error"></div>
</div>
</div>
<div className="bg"></div>
</div>
      )
   }
}

export default SignIn;




