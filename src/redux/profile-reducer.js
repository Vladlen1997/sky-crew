const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    post: [
        {id: 1, likesCount: 1, message: 'Hi, how are you?'},
        {id: 2, likesCount: 12, message: 'What is your name?'},
        {id: 3, likesCount: 20, message: 'Where are you from?'},
        {id: 4, likesCount: 6, message: 'Tail is a part of plane'}
    ],

    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, likesCount: 8, message: state.newPostText};
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: ''

            }

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text

            }
        }
        default:
            return state;


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

export default profileReducer;
