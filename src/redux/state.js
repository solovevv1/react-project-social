import { rerenderEntireTree } from "../render";


let state = {
    profilePage: {
        postsData: [
            { id: 1, post: 'Hey there!', like: 2 },
            { id: 2, post: 'Hi everyone :)', like: 5 },
            { id: 3, post: 'Just getting started', like: 0 }
        ]
    },
    messagesPage: {
        dialogsData: [
            { id: 1, name: 'Vladimir' },
            { id: 2, name: 'Anna' },
            { id: 3, name: 'Artem' },
            { id: 4, name: 'Sveta' },
            { id: 5, name: 'Valera' }
        ],
        messagesData: [
            { id: 1, message: 'Hey!' },
            { id: 2, message: 'Hi!' },
            { id: 3, message: 'Hi there!' }
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        like: 0
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree (state);
}

export default state;