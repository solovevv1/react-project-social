import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogsData = [
    { id: 1, name: 'Vladimir' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Artem' },
    { id: 4, name: 'Sveta' },
    { id: 5, name: 'Valera' }
]

let dialogElements = dialogsData.map ( (dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />
} )

let messagesData = [
    { id: 1, message: 'Hey!' },
    { id: 2, message: 'Hi!' },
    { id: 3, message: 'Hi there!' }
]

let messageElements = messagesData.map ( (messages) => {
    return <Message message={messages.message} />
})

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogElements }
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} /> */}
            </div>
            <div className={s.messages}>
                { messageElements }
                {/* <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} /> */}
            </div>
        </div>
    )
}

export default Dialogs;