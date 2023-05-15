import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />;
    }
    return <>
        <div>
            <img src='https://cleanlife.wdfiles.com/local--files/postcover:beach-header-2/beach-header.jpg' />
        </div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.small} />
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            <div>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div>{profile.contacts.vk}</div>
            </div>
        </div>
    </>
}

export default ProfileInfo;