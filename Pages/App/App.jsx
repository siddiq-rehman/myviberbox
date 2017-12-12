import React from 'react';
import { NavLink } from 'react-router-dom'
import './css/style.css'

class App extends React.Component {
   render() {
      return (
<div className="Mdiv">
<div className="main">
<div className="uppermain"><p>VIBER BOX</p></div>
<div className="innermain">
<form action = "./SignUp">
<div className="SignUp">
<div><button type="submit" className="SignUp-submit">Sign Up</button></div>
<div><p>You can SignUp and start chatting with your friends</p></div>
</div>
</form>
<form action = "./SignIn">
<div className="SignIn">
<div><button type="submit" className="SignIn-submit">Sign In</button></div>
<div><p>SignIn to chat with a particular friend</p></div>
</div>
</form>
<div className="Error">"Designed and developed By Sid"</div>
</div>
</div>
<div className="bg"></div>
</div>
      )
   }
}

export default App;



