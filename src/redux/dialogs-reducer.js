const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-MESSAGE';

const dialogsReducer = (state, action) => {

    if (action.type === SEND_MESSAGE) {
        let body = {id: 5, message: state.newMessageText};
        state.messages.push(body);
        state.newMessageText = '';
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageText = action.body;
    }
    return state;
}

export default dialogsReducer;