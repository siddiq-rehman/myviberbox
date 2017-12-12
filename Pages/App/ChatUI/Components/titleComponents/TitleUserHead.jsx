import React from 'react'

class TitleUserHead extends React.Component{

render(){
 //   console.log("rendereing title friend",this.props)
    return(
        <figure className="user">
            <img alt="user" src={localStorage.getItem(name=this.props.name)} />
	  </figure>
    )
}
}

export default TitleUserHead;