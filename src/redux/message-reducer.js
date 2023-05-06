
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

    newMessageBody: ""
}

const messagesReducer = (state = initialState, action) => {

    // let stateCopy;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return { 
                ...state,
                newMessageBody: action.body
             };
            // stateCopy.newMessageBody = action.body;
            // return stateCopy;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return { 
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, { id: 4, message: body }]
             };
            // stateCopy.messagesData.push({ id: 4, message: body });
            // return stateCopy;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default messagesReducer;