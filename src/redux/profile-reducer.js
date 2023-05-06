const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, post: 'Hey there!', like: 2 },
        { id: 2, post: 'Hi everyone :)', like: 5 },
        { id: 3, post: 'Just getting started', like: 0 }],

    newPostText: 'it kamasutra'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                like: 0
            };
            return { 
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
            
            // stateCopy.postsData = [...state.postsData];
            // stateCopy.postsData.push(newPost);
            // stateCopy.newPostText = '';
            // return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
            // stateCopy.newPostText = action.newText;
            // return stateCopy;
        }
        default:
            return state;
    }
}

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

export default profileReducer;