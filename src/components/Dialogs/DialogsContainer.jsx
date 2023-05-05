import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/message-reducer';
import StoreContext from '../../StoreContext';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const DialogsContainer = () => {



    return (
        <StoreContext.Consumer> 
            { store => {
                let state = store.getState().messagesPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                };

                return <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    messagesPage={state} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;