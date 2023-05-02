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
                { id: 3, message: 'Hi there!' }]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;

export default store;

