import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postsData.map ( (posts) => {
        return <Post message={posts.post} likes={posts.like} />
    })

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>    
        </div> 
        <div className={s.posts}>
            { postsElements }
        </div>
    </div>
}

export default MyPosts;