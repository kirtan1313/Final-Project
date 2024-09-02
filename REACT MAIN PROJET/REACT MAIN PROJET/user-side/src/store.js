import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import rootreducer from "./Services/Combine/combine";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
export const store = createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))