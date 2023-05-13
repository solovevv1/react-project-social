import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import Textarea from '../../Common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postsData.map((posts) => {
        return <Post message={posts.post} likes={posts.like} />
    })

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;