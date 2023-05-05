import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './ProfileReducer';
import messagesReducer from './MessagesReducer'; 
import sidebarReducer from './SidebarReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer 
});

let store = createStore(reducers);

export default store;

