import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetch,
    unfollow
} from "../../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "../Users";
import Preloader from "../../Common/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetch(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetch(false);
        })
    }

    render() {
        return <>
            {this.props.isFetch ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged} users={this.props.users} follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        </>

    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetch: state.usersPage.isFetch

    }
}


export default connect(mapStateToProps,

    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetch})(UsersContainer);

