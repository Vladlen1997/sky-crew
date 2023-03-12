import React from 'react';
import classes from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import MessagesItems from "./MessagesItems/MessagesItems";

const Dialogs = () => {
    let dialogs = [
        {id: 1, dialog: 'Vlad'},
        {id: 2, dialog: 'Oleg'},
        {id: 3, dialog: 'Petr'},
        {id: 4, dialog: 'Fedya'}
    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'How are you?'},
        {id: 1, message: 'apsddkd'},
        {id: 1, message: 'cool'},
    ];

    let dialogsEl = dialogs.map(dialog => <DialogItems id={dialog.id} dialog={dialog.dialog}/>)
    let messagesEl = messages.map(message => <MessagesItems id={message.id} message={message.message}/>)
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