import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile } from '../../redux/profile-reducer'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }
    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>

        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));



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