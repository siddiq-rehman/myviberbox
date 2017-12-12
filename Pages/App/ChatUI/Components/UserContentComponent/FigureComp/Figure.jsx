import React from 'react'

export class Figure extends React.Component{
    render(){
        if(this.props.fig==="UserName")
        return(
        <figure className="avatar-me">
            <img src={localStorage.getItem(sessionStorage.getItem(this.props.fig))} />
        </figure>
        )

        else
        return(
            <figure className="avatar">
                <img src={localStorage.getItem(sessionStorage.getItem(this.props.fig))} />
            </figure>
            )

    }
}