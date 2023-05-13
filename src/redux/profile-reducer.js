import { profileAPI, usersAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        { id: 1, post: 'Hey there!', like: 2 },
        { id: 2, post: 'Hi everyone :)', like: 5 },
        { id: 3, post: 'Just getting started', like: 0 }],

    // newPostText: 'it kamasutra',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: action.newPostText,
                like: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        }
        // case UPDATE_NEW_POST_TEXT: {
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     };
        //     // stateCopy.newPostText = action.newText;
        //     // return stateCopy;
        // }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

// export const addPostActionCreator = () => ({ type: ADD_POST });
export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    }
};
// export const updateNewPostTextActionCreator = (text) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT, newText: text
//     }
// };
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

// thunk:
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response.data));
        });
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then((response) => {
            dispatch(setStatus(response.data));
        });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then((response) => {
            if (response.data.resultCode === 0)
            dispatch(setStatus(status));
        });
};

export default profileReducer;