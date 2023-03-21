import React from 'react';
import Posts from "../Posts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },

        updateNewPost: (text) => {
            dispatch(updateNewPostActionCreator(text))
        }
    }
}



const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;