import React from 'react';
import Posts from "../Posts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile-reducer";
import StoreContext from "../../../../StoreContext";


const PostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().profilePage.post;
                const addNewPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                const onPostChange = (text) => {
                   store.dispatch(updateNewPostActionCreator(text));
                }
                return <Posts addPost={addNewPost} updateNewPost={onPostChange} profilePage={state}/>
            }

        }

        </StoreContext.Consumer>


    )

}
export default PostsContainer;