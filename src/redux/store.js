import messagesReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, post: 'Hey there!', like: 2 },
                { id: 2, post: 'Hi everyone :)', like: 5 },
                { id: 3, post: 'Just getting started', like: 0 }],

            newPostText: 'it kamasutra'
        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: 'Vladimir' },
                { id: 2, name: 'Anna' },
                { id: 3, name: 'Artem' },
                { id: 4, name: 'Sveta' },
                { id: 5, name: 'Valera' }],

            messagesData: [
                { id: 1, message: 'Hey!' },
                { id: 2, message: 'Hi!' },
                { id: 3, message: 'Hi there!' }],

            newMessageBody: '',
        },
        sidebar: {

        }
    },

    getState() {
        return this._state;
    },
    
    _callSubscriber() { },

    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        
        this._callSubscriber(this._state);

    }
}

// window.store = store;

export default store;

