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
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'apsddkd'},
        {id: 4, message: 'cool'},
    ],

    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: state.newMessageText}],
                newMessageText: ''
            }

        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageText: action.body
            }

        }
        default:
            return state;
    }
}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;