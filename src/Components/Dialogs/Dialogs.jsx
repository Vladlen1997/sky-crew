import React from 'react';
import classes from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import MessagesItems from "./MessagesItems/MessagesItems";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    let dialogsEl = props.dialogsPage.dialogs.map(dialog => <DialogItems id={dialog.id} dialog={dialog.dialog}/>)
    let messagesEl = props.dialogsPage.messages.map(message => <MessagesItems id={message.id} message={message.message}/>)


    const addMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    const newMessageChange = (e) => {
        let object = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(object));

    }

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogsEl}
            </div>
            <div>
                {messagesEl}
            </div>

            <div>
                <div>
                    <textarea onChange={newMessageChange} value={props.dialogsPage.newMessageText} placeholder='Write message...'/>
                </div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;