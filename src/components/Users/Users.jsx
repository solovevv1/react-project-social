import React from "react";
import Paginator from '../Common/Paginator/Paginator';
import User from "./User";

let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {
    return <>
        <Paginator totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged} />
        {
            users.map(u =>
                <User key={u.id} user={u}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow} />)
        
        }
    </>
}

export default Users;