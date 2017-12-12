const AvailReducers= function(state={"status":"Offline"},action){
    //console.log("user reducer");
    switch(action.type){
    
    case "Availablity":{
        state= Object.assign({},state,{status:action.payload})
    }
    
    }
     return state;
    }
    
    exports.AvailReducers=AvailReducers;