import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    });

    let messageElements = props.state.messagesData.map((messages) => {
        return <Message message={messages.message} />
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} /> */}
            </div>
            <div className={s.messages}>
                {messageElements}
                {/* <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} /> */}
            </div>
        </div>
    )
}

export default Dialogs;