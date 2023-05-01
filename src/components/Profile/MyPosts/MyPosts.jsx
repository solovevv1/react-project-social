import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postsData.map ( (posts) => {
        return <Post message={posts.post} likes={posts.like} />
    })

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <div>
                <textarea ref={ newPostElement }></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>    
        </div> 
        <div className={s.posts}>
            { postsElements }
        </div>
    </div>
}

export default MyPosts;