import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let newMessageChange = (object) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(object));

    }

    return (
        <Dialogs sendMessage = {addMessage} updateNewMessageBody = {newMessageChange} dialogsPage = {state}/>
    )
}


export default DialogsContainer;


