import React from 'react';
import classes from "../Profile.module.css";
import Post from "./Post/Post";


const Posts = () => {
    let likesCount = [
        {id: 1, likesCount: 1, message: 'Hi, how are you?'},
        {id: 2, likesCount: 12, message: 'What is your name?'},
        {id: 3, likesCount: 20, message: 'Where are you from?'},
        {id: 4, likesCount: 6, message: 'Tail is a part of plane'}
    ]

    let likesCountEl = likesCount.map(count => <Post likesCount={count.likesCount} id={count.id}
                                                     message={count.message}/>)
    return <div className={classes.posts}>
        {likesCountEl}
    </div>
}


export default Posts;