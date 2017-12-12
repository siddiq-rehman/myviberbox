import React from 'react'

const OnlineStyle={
    border:'2px solid rgba(24, 202, 71, 0.7)'
}
const OfflineStyle={
    border:'2px solid rgba(255, 255, 255, 0.24)'
}
class TitleAvatarHead extends React.Component{

render(){
 //   console.log("rendereing title avatar friend",this.props)
    if(this.props.status==="Online")
    return(
<figure className="avatar-head" style={OnlineStyle}>
<img alt="friend" src={localStorage.getItem(name=this.props.name)} />
</figure>
    )
   else
   return(
    <figure className="avatar-head" style={OfflineStyle}>
    <img alt="friend" src={localStorage.getItem(name=this.props.name)} />
    </figure>
        )

}
}

export default TitleAvatarHead;