import React from 'react';
import classes from './Profile.module.css';
import Posts from "./Posts/Posts";


const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <Posts post={props.profilePage.post} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
        </div>
    )
}


export default Profile;