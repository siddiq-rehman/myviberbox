import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import App from './App/App.jsx';
import SignIn from './App/SignIn/SignIn.jsx';
import SignUp from './App/SignUp/SignUp.jsx';
import ChatUI from './App/ChatUI/ChatUI.jsx';
import { Provider } from 'react-redux';
import  store  from './App/ChatUI/Store/store.jsx'

export const mainLoader = (container) => {


ReactDOM.render(
    <Provider store={store}>
   <BrowserRouter>
   <div>
      <Route  exact path = "/" component = {App} />
	  <Route  path = "/SignIn/" component = {SignIn} />
	  <Route  path = "/SignUp/" component = {SignUp} />
	   <Route  path = "/ChatUI/" component = {ChatUI} />
		 </div>
   </BrowserRouter>
   </Provider>

, container)

}