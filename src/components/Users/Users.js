import React, {useEffect, useState} from 'react';

import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import {userService} from "../../services/user.service";
import "./users.css";

const Users = ({getUserPosts}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
            userService.getAll().then(value => setUsers(value))
    }, [])

    const [user, setUser] = useState(null);
    function getUserId(id) {
        userService.getById(id).then(value => setUser(value))
    }

    return (
        <div>
            <div className="usersBody">
                <div className="usersWrapper">
                    <h1>Users List</h1>

                    {users.map(value => <User
                        key={value.id}
                        user={value}
                        getUserId={getUserId}
                    />)}
                </div>

                {user && <UserDetails user={user} getUserPosts={getUserPosts}/>}
            </div>
        </div>
    );
};

export default Users;
