const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-MESSAGE';

const dialogsReducer = (state, action) => {

    if (action.type === SEND_MESSAGE) {
        let body = {id: 5, message: this._state.dialogsPage.newMessageText};
        this._state.dialogsPage.messages.push(body);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        this._state.dialogsPage.newMessageText = action.body;
        this._callSubscriber(this._state);
    }
    return state;
}