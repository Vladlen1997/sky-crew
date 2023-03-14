import React from 'react';
import classes from "../Profile.module.css";
import Post from "./Post/Post";


const Posts = (props) => {


    let likesCountEl = props.likesCount.map(count => <Post likesCount={count.likesCount} id={count.id}
                                                           message={count.message}/>)

    let newPostElement = React.createRef();

    const addPost = (props) => {
        let textRef = newPostElement.current.value;
        props.addNewPost(textRef);
    }

    return <div className={classes.posts}>
        <h3>My Posts</h3>

        <div>
            {likesCountEl}
        </div>

        <div>
            <div><textarea ref={newPostElement} placeholder='write the text...'/></div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    </div>
}


export default Posts;