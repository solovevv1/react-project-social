import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cdn.onlinewebfonts.com/svg/img_237553.png' />
            { props.message } 
            <div>
                <span>Like</span> {props.likes}
            </div>
        </div>
    )    
}

export default Post;