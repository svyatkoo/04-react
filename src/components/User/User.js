import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import "./User.css";
import {userServise} from "../../services/user.servise";
import UserDetails from "../UserDetails/UserDetails";

const User = () => {
    const {id} = useParams();
    const {state} = useLocation();

    const [user, setUsers] = useState(null);

    useEffect(()=> {
        if (state) {
            setUsers(state);
            return;
        }
        userServise.getById(id).then(value => setUsers({...value}))
    }, [id])

    return (
        <div className="userBox">
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export default User;