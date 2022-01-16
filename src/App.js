import './App.css';
import {useState} from "react";

import Users from "./components/Users/Users";
import getByUser from "./services/post.service";
import UserPosts from "./components/UserPosts/UserPosts";

function App() {
    const [userPostsList, setUserPostsList] = useState(null);

    function getUserPosts(id) {
        getByUser(id).then(value => setUserPostsList(value));
    }

    return (
        <div className="App">
            <div className="wrapper">
                <Users getUserPosts={getUserPosts}/>
            </div>

            {userPostsList && <UserPosts key={userPostsList.id} userPostsList={userPostsList}/>}
        </div>
    );
}

export default App;
