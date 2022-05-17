// only one store can create in an application


import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import CounterReducer from "../reducer/countReducer";


const Reducers = combineReducers({
    counter:CounterReducer
})

const store = configureStore({reducer:Reducers});



export default store;