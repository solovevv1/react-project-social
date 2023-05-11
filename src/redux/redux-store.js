import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profile-reducer';
import messagesReducer from './message-reducer'; 
import sidebarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;

