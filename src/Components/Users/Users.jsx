import React from 'react';
import classes from './Users.module.css';
import axios from "axios";
import user from '../../assets/images/user.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://637b689d10a6f23f7fa7ea2b.mockapi.io/Items").then(response => {
            this.props.setUsers(response.data)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (


            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && classes.selectedPage}>{p}</span>
                    })}

                </div>
                {
                    this.props.users.map(u => <div key={u.id}>

                        <span>
                            <div className={classes.photo}>
                                <img src={u.photoUrl != null ? u.photoUrl : user} alt="face"/>
                            </div>

                            <div className="subscribe">

                                {
                                    u.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>unfollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(u.id)
                                        }}>follow</button>
                                }
                            </div>

                            </span>
                            <span>
                            <span>
                                <div>{u.fullName}</div><div><div>{u.status}</div></div>
                            </span>
                        </span>

                            <span className="cityBlock">
                                <div className="country">{u.location.country}</div>
                                <div className="city">{u.location.city}</div>
                            </span>
                        </div>
                    )}

            </div>
        )

    }
}


export default Users;