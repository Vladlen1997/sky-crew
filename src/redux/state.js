const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-MESSAGE';


let store = {
    _callSubscriber() {
        console.log('state was changed');
    },

    _state: {

        headerPage: {
            headerLink: [
                {id: 1, object: "Shutdown mode"},
                {id: 2, object: "do not disturb mode"},
                {id: 3, object: "accessibility mode"}
            ]
        },

        dialogsPage: {
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
        },
        profilePage: {
            post: [
                {id: 1, likesCount: 1, message: 'Hi, how are you?'},
                {id: 2, likesCount: 12, message: 'What is your name?'},
                {id: 3, likesCount: 20, message: 'Where are you from?'},
                {id: 4, likesCount: 6, message: 'Tail is a part of plane'}
            ],

            newPostText: ''
        },

        navBarPage: {
            nameLink: [
                {id: 1, link: "Profile"},
                {id: 2, link: "Friends"},
                {id: 3, link: "Messages"},
                {id: 4, link: "News"},
                {id: 5, link: "Settings"}
            ]
        }

    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        if (action.type === ADD_POST) {
            let newPost = {id: 5, likesCount: 8, message: this._state.profilePage.newPostText};
            this._state.profilePage.post.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = {id: 5, message: this._state.dialogsPage.newMessageText};
            this._state.dialogsPage.messages.push(body);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageText = action.body;
            this._callSubscriber(this._state);
        }
    }

}


export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export let updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, text: text
    }


};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;
window.store = store;