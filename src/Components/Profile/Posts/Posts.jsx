import React from 'react';
import classes from "../Profile.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";

const Posts = (props) => {


    let likesCountEl = props.post.map(count => <Post likesCount={count.likesCount} id={count.id}
                                                           message={count.message}/>)


    let getRef = React.createRef();


    const addNewPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = () => {
        let text = getRef.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }


    return <div className={classes.posts}>
        <h3>My Posts</h3>

        <div>
            {likesCountEl}
        </div>

        <div>
            <div><textarea onChange={onPostChange} ref={getRef} value={props.newPostText} placeholder='write the text...'/></div>
            <div>
                <button onClick={addNewPost}>Add post</button>
            </div>
        </div>
    </div>
}


export default Posts;