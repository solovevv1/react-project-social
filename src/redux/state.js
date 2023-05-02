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
        }
    },
    _callSubscriber() { },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messagesData.push( { id: 4, message: body } );

            this._callSubscriber(this._state);
        }
    }
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

// export const addPostActionCreator = () => ({ type: ADD_POST });
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
};
export const sendMessageCreator = () => ( {type: SEND_MESSAGE} );
export const updateNewMessageBodyCreator = (body) => ( {type: UPDATE_NEW_MESSAGE_BODY, body: body} );

window.store = store;

export default store;

