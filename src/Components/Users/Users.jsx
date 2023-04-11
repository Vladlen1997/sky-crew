import React from 'react';
import classes from './Users.module.css';
import user from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize); //pagesCount=20p/5p
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);

    }

    return (

        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && classes.selectedPage} onClick={() => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}

            </div>
            {props.users.map(u => <div key={u.id}>

                        <span>
                            <NavLink to={'/Profile/' + u.id}>
                            <div className={classes.photo}>
                                <img src={u.photos.small != null ? u.photos.small : user} alt="face"/>
                            </div>
                            </NavLink>


                            <div className="subscribe">

                                {u.followed ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>unfollow</button> : <button onClick={() => {
                                    props.follow(u.id)
                                }}>follow</button>}
                            </div>

                            </span>
                <span>
                            <span>
                                <div>{u.name}</div><div><div>{u.status}</div></div>
                            </span>
                        </span>

                <span className="cityBlock">
                                <div className="country">{'u.location.country'}</div>
                                <div className="city">{'u.location.city'}</div>
                            </span>
            </div>)}

        </div>)

}


export default Users;