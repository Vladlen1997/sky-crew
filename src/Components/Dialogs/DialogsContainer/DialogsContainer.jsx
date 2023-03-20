import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import StoreContext from "../../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsPage;
                let addMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }
                let newMessageChange = (object) => {
                    store.dispatch(updateNewMessageBodyActionCreator(object));

                }
                return <Dialogs sendMessage={addMessage} updateNewMessageBody={newMessageChange} dialogsPage={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}


export default DialogsContainer;


