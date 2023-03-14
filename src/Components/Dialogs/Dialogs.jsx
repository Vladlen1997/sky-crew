import React from 'react';
import classes from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import MessagesItems from "./MessagesItems/MessagesItems";

const Dialogs = (props) => {

    let dialogsEl = props.dialogsPage.dialogs.map(dialog => <DialogItems id={dialog.id} dialog={dialog.dialog}/>)
    let messagesEl = props.dialogsPage.messages.map(message => <MessagesItems id={message.id} message={message.message}/>)
    return (
        <div className={classes.dialogs}>
            <div>
                {dialogsEl}
            </div>
            <div>
                {messagesEl}
            </div>
        </div>
    )
}


export default Dialogs;