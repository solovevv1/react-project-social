
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
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: 4, message: body });
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default messagesReducer;