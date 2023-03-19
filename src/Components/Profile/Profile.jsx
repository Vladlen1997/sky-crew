import React from 'react';
import classes from './Profile.module.css';
import PostsContainer from "./Posts/PostsContainer/PostsContainer";


const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <PostsContainer store={props.store} dispatch={props.dispatch} />
        </div>
    )
}


export default Profile;