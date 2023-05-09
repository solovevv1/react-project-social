import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    return <div>
        <div>
            <img src='https://cleanlife.wdfiles.com/local--files/postcover:beach-header-2/beach-header.jpg' />
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.small} />
            {/* ava + description */}
            <div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.vk}</div>
            </div>
        </div>
    </div>
}

export default ProfileInfo;