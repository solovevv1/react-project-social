import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div>
            <img src='https://cleanlife.wdfiles.com/local--files/postcover:beach-header-2/beach-header.jpg' />
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;