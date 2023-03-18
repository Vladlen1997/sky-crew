const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, likesCount: 8, message: state.newPostText};
            state.post.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
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
