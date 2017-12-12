import React from 'react';
import { NavLink } from 'react-router-dom'
import './css/style.css'

class SignIn extends React.Component {
   render() {
      return (
<div className="Mdiv">
<div className="main">
<div className="uppermain_SU"><p>VIBE BOX - SIGN UP</p></div>
<div className="innermain_SU">

<div className="Un_SU">User Name: <input className="InpUn_SU" type="text" name="UserName" placeholder="UserName"></input></div>
<div className="Pwd_SU">Password: <input className="InpPwd_SU" type="password" name="Password" placeholder="Password"></input></div>
<div className="PwdCp_SU">Confirm Password: <input className="InpPwdCp_SU" type="password" name="CPassword" placeholder="Password"></input></div>
<div className="Un_SU">Upload your Profile picture here</div>
<div className="Fn_SU"><input  className="InpFn_SU" type = "file" name = "file" size = "5000" ></input></div>
<div className="Pwd1_SU"><input type = "submit" className="message-submit_SU" value = "Upload File" ></input><br></br></div>
<div className="Error_SU"></div>

</div>
</div>
<div className="bg"></div>
</div>
      )
   }
}

export default SignIn;



