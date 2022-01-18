import './App.css';
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UsersPage from "./Pages/UsersPage/UsersPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import User from "./components/User/User";
import HomePage from "./Pages/HomePage/HomePage";
import UserPosts from "./components/UserPosts/UserPosts";
import PostDetails from "./components/PostDetails/PostDetails";
import PostComments from "./components/PostComments/PostComments";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"users"} element={<UsersPage/>}>
                        <Route path={":id/"} element={<User/>}/>
                        <Route path={":id/:posts"} element={<UserPosts/>}/>
                    </Route>

                    <Route path={"posts"} element={<PostsPage/>}>
                        <Route path={":id/"} element={<PostDetails/>}/>
                        <Route path={":id/:comments"} element={<PostComments/>}/>
                    </Route>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
