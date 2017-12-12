import React from 'react';


class TitleOnline extends React.Component{
   componentWillUnmount(){

console.log("ccomponent wwill unmount")
   }

        render(){
if(this.props.status==="Online")
            return (

                <div className="Online1">
                    <h1 className="Online">Online</h1>
                </div>

            )

            else
              return(  
              <div className="Online1">
            </div>
              )
            

        }


}

export default TitleOnline;