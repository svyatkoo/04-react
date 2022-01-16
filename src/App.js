import './App.css';
import {useEffect, useState} from "react";

import Users from "./components/Users";
import Form from "./components/Form";

function App() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
                setFilteredUsers([...value])
            })
    }, [])

    const getFilter = (data) => {
        let filterArr = [...users];

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }

        if (data.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }

        if (data.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }

        setFilteredUsers(filterArr)
    }

    return (
        <div className="App">
            <Form getFilter={getFilter}/>
            <Users users={filteredUsers}/>
        </div>
    );
}

export default App;
