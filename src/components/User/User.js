import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import "./User.css";
import {userServise} from "../../services/user.servise";
import UserDetails from "../UserDetails/UserDetails";

const User = () => {
    const {id} = useParams();

    const [user, setUsers] = useState(null);
    useEffect(()=> {
        userServise.getById(id).then(value => setUsers({...value}))
    }, [id])

    return (
        <div className="userBox">
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export default User;