import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Textarea from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogElements = state.dialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
    });

    let messageElements = state.messagesData.map((messages) => {
        return <Message message={messages.message} key={messages.id} />
    });
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Navigate to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength100]}
                    name='newMessageBody' placeholder='Enter your message' />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;