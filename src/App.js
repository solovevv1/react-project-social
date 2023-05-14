import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import React, { Component, useEffect } from 'react'; 
import { withRouter } from './components/Profile/ProfileContainer'
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/Common/Preloader/Preloader';



const App = (props) => {
// class App extends Component {
//   componentDidMount() {
//     this.props.initializeApp();
//   }

  useEffect(() => {props.initializeApp()}, []);

  // render() {
    if (!/* this. */props.initialized){
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="dialogs" element={<DialogsContainer />} />
            {/* <Route path="/profile" element={<ProfileContainer />} /> */}
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<UsersContainer />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
// }

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

// export default App;
export default compose (
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);