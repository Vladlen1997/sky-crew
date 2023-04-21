import React from 'react';
import classes from './Profile.module.css';
import PostsContainer from "./Posts/PostsContainer/PostsContainer";
import ProfileInfo from "./ProfileInfo";


const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/>
        </div>
    )
}


export default Profile;