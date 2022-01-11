import {useEffect, useState} from "react";
import User from "../user/user";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value));
    }, []);

    return (
        <div className="usersContainer">
            {users.map(user => <User key = {user.id} user = {user}/>)}
        </div>
    )
}

export default Users;