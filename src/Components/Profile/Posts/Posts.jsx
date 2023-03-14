import React from 'react';
import classes from "../Profile.module.css";
import Post from "./Post/Post";


const Posts = (props) => {


    let likesCountEl = props.likesCount.map(count => <Post likesCount={count.likesCount} id={count.id}
                                                     message={count.message}/>)
    return <div className={classes.posts}>
        {likesCountEl}
    </div>
}


export default Posts;