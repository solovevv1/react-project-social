import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, post: 'Hey there!', like: 2},
        {id: 2, post: 'Hi everyone :)', like: 5},
        {id: 3, post: 'Just getting started', like: 0} 
    ]

    let postsElements = postsData.map ( (posts) => {
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