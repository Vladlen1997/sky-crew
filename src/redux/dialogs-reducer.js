const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, dialog: 'Vlad'},
        {id: 2, dialog: 'Oleg'},
        {id: 3, dialog: 'Petr'},
        {id: 4, dialog: 'Fedya'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'How are you?'},
        {id: 1, message: 'apsddkd'},
        {id: 1, message: 'cool'},
    ],

    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = {id: 5, message: state.newMessageText};
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(body);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.body;
            return stateCopy;
        }
        default:
            return state;
    }
}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;