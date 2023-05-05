import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/message-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogElements = state.dialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    });

    let messageElements = state.messagesData.map((messages) => {
        return <Message message={messages.message} />
    });
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body)
        // props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                ... */}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
                {/* <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                ... */}
            </div>
        </div>
    )
}

export default Dialogs;