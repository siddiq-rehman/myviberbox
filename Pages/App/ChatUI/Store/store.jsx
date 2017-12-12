import { applyMiddleware, combineReducers, createStore } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { MsgReducers } from './Reducers/MsgReducers.jsx';
import { AvailReducers } from './Reducers/AvailReducers.jsx';






const reducers= combineReducers({
	Message: MsgReducers,
	Availability: AvailReducers
})

const middleware=applyMiddleware();
export default createStore(reducers,middleware);