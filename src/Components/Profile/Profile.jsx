import React from 'react';
import classes from './Profile.module.css';
import Posts from "./Posts/Posts";


const Profile = () => {
    return (
        <div className={classes.profile}>
            <Posts />
        </div>
    )
}


export default Profile;