import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div>
        <div>
            My posts
        </div>
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div> 
        <div className={s.posts}>
            <Post message='Hey there!' likes='2'/>
            <Post message='Hi everyone :)' likes='5'/>
            <Post message='Just getting started'/>
        </div>
    </div>
}

export default MyPosts;