import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

 
class ProfileContainer extends React.Component {
    
    componentDidMount(props) {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 2;
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {withCredentials: true, 
        headers: {"API-KEY": "3602aab4-42b1-40e7-96b3-b6ea6c6a9bae"} })
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    }
    // componentDidUpdate(prevProps) {
    //     let userId = this.props.router.params.userId;
    //     if (prevProps.router.params.userId !== userId) {
    //         let userId = 2;
    //         axios
    //             .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    //             .then((response) => {
    //                 this.props.setUserProfile(response.data);
    //             });
    //     }
    // }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
    
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    }
    return ComponentWithRouterProp;
}


export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));


// class ProfileContainer extends React.Component {

//     componentDidMount() {
//         axios
//             .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//             .then(response => {
//                 this.props.setUserProfile(response.data);
//             })
//     }

//     render() {
//         return (
//         <div>
//             <Profile {...this.props} profile={this.props.profile} />
//         </div>
//         )
//     }
// }

// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile
// })

// export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);