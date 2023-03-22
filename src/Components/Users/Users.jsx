import React from 'react';
import classes from './Users.module.css';


const Users = (props) => {

    return (
        <div>
            {
                props.users.map(users =>
                    <div key={users.id}>
                        <span>
                            <div>
                                <img src={users.photoUrl} alt="Photo" className={classes.userPhoto}/>
                            </div>
                            <div>
                                {users.followed
                                    ? <button onClick={() => {props.UNFOLLOW(users.id) } }>Unfollow</button>
                                    : <button onClick={() => {props.FOLLOW(users.id)}}>Follow</button> }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{users.fullName}</div>
                                <div>{users.status}</div>
                            </span>

                            <span>
                                <div>{users.location.country}</div>
                                <div>{users.location.city}</div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    )
}


export default Users;