const MsgReducers= function(state=[],action){
//console.log("user reducer");
switch(action.type){

case "Message":{
    return [...state,action.payload]
}

}
 return state;
}

exports.MsgReducers=MsgReducers;