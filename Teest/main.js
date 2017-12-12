import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import App from './App/App.js';

import { Provider } from 'react-redux';


ReactDOM.render(

   <BrowserRouter>
   <div>
      <Route  exact path = "/" component = {App} />
	  <Route  exact path = "/SignIn" component = {App} />
		 </div>
   </BrowserRouter>

, document.getElementById('app'))