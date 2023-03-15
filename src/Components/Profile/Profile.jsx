import React from 'react';
import classes from './Profile.module.css';
import Posts from "./Posts/Posts";


const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <Posts post={props.post} newPostText={props.newPostText} addNewPost={props.addNewPost} updateNewPostText={props.updateNewPostText} />
        </div>
    )
}


export default Profile;