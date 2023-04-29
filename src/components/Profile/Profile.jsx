import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return <div>
        <img src='https://cleanlife.wdfiles.com/local--files/postcover:beach-header-2/beach-header.jpg' />
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;