import React, {useEffect, useState} from 'react';

import {userServise} from "../../services/user.servise";
import UserTitle from "../../components/UserTitle/UserTitle";
import User from "../../components/User/User";
import UserPosts from "../../components/UserPosts/UserPosts";
import "./UsersPage.css";
import {useLocation} from "react-router-dom";

const UsersPage = () => {
    const {state} = useLocation();

    const [users, setUsers] = useState([]);
    useEffect(()=> {
        userServise.getAll().then(value => setUsers(value))
    }, [])

    return (
        <div className="wrapper">
            <div className="mainLeft">
                <h1>UsersPage</h1>
                {users.map(user => <UserTitle key={user.id} user={user}/>)}
            </div>
            <div className="mainRight">
                <User/>

                <div>
                    {state ? <UserPosts/> : ''}
                </div>
            </div>
        </div>
    );
};

export default UsersPage;