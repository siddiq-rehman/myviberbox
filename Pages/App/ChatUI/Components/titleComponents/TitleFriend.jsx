import React from 'react'

class TitleFriend extends React.Component{

render(){
 //   console.log("rendereing title friend",this.props)
    return(
<div className="Friend"> 
    <h1>{this.props.name}</h1>
 </div>
    )
}
}

export default TitleFriend;