import React from 'react';
import classes from './Profile.module.css';
import Profile from "./Profile";



class ProfileContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return <div className={classes.profile}>
            <Profile {...this.props}/>
        </div>
    }


}


export default ProfileContainer;