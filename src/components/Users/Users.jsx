import React from "react";
import s from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {

        props.setUsers( [
            { id: 1, photoUrl: 'https://cdn4.iconfinder.com/data/icons/must-have-outline/100/objects-29-512.png', 
            followed: false, fullName: 'Vladimir', status: 'I\'m a frontend developer', location: { city: 'Galle', country: 'Sri Lanka' } },
            { id: 2, photoUrl: 'https://cdn4.iconfinder.com/data/icons/must-have-outline/100/objects-29-512.png', 
            followed: true, fullName: 'Anna', status: 'Hi world!', location: { city: 'Paris', country: 'France' } },
            { id: 3, photoUrl: 'https://cdn4.iconfinder.com/data/icons/must-have-outline/100/objects-29-512.png', 
            followed: false, fullName: 'Dmitry', status: 'Hello!', location: { city: 'California', country: 'New York' } }
        ] )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt='' className={s.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;