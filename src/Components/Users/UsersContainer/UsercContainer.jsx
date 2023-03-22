import React from 'react';
import {connect} from "react-redux";
import Users from "../Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../../redux/users-reducer";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}



let mapDispatchToProps = (dispatch) => {
    return {
        FOLLOW: (userId) => {
            dispatch(followActionCreator(userId));
        },

        UNFOLLOW: (userId) => {

            dispatch(unfollowActionCreator(userId));
        },

        USERS: (users) => {
            dispatch(setUsersActionCreator);
        }
    }

}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);



export default UsersContainer;