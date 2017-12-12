import React from 'react'

class TitleUser extends React.Component{
render(){
   // console.log("rendereing title user")
return(
<div className="Mainuser"> 
    <h1 className="username">
    {this.props.name} 
        </h1>
</div>
)
}
}

export default TitleUser;