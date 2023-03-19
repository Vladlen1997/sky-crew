import React from 'react';
import classes from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import MessagesItems from "./MessagesItems/MessagesItems";

const Dialogs = (props) => {

    let dialogsEl = props.dialogsPage.dialogs.map(dialog => <DialogItems id={dialog.id} dialog={dialog.dialog}/>)
    let messagesEl = props.dialogsPage.messages.map(message => <MessagesItems id={message.id}
                                                                              message={message.message}/>)


    const addMessage = () => {
        props.sendMessage();
    }

    const newMessageChange = (e) => {
        let object = e.target.value;
        props.updateNewMessageBody(object);

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
                    <textarea onChange={newMessageChange} value={props.dialogsPage.newMessageText}
                              placeholder='Write message...'/>
                </div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;