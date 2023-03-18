const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    if (action.type === ADD_POST) {
        let newPost = {id: 5, likesCount: 8, message: this._state.profilePage.newPostText};
        state.post.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.text;
    }

    return state;
}
