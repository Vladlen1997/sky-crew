import React from 'react';
import classes from "./Post.module.css";


const Post = (props) => {
    return (
        <div>
            <img width={80} height={80}
                 src="https://www.proplan.ru/sites/owners.proplan.ru/files/2021-12/mops_1940.jpg" alt="dog"/>
            {props.message}
            <div className={classes.post}>
                    <span>
                        like
                        {props.likesCount}
                    </span>
            </div>
        </div>
    )
}


export default Post;