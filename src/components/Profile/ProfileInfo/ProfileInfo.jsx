import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return <>
        <div>
            <img src='https://cleanlife.wdfiles.com/local--files/postcover:beach-header-2/beach-header.jpg' />
        </div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.small || userPhoto} className={s.mainPhoto} />
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
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