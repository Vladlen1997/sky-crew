import React from 'react';
import classes from './Profile.module.css';
import Profile from "./Profile";



class ProfileContainer extends React.Component {

    render() {
        return <div className={classes.profile}>
            <Profile {...this.props}/>
        </div>
    }


}


export default ProfileContainer;