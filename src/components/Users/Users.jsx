import React from "react";
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= /* pagesCount */20; i++) {
        pages.push(i);
    }

    return <>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/*' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='avatar' className={s.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "3602aab4-42b1-40e7-96b3-b6ea6c6a9bae"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        });

                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "3602aab4-42b1-40e7-96b3-b6ea6c6a9bae"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        });
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
        }
    </>
}

export default Users;