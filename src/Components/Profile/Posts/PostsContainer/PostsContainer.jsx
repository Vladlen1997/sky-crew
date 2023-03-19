import React from 'react';
import Posts from "../Posts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile-reducer";



const PostsContainer = (props) => {

    let state = props.store.getState().profilePage;


    const addNewPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        props.dispatch(updateNewPostActionCreator(text));
    }


    return <Posts addPost = {addNewPost} updateNewPost = {onPostChange} profilePage={state} />

}


export default PostsContainer;