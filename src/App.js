import './App.css';
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import {
    HomePage,
    NotFoundPage, PhotoPage,
    PostCommentsPage,
    PostDetailPage,
    PostsPage, UserAlbumsPage,
    UserDetailsPage,
    UserPostsPage,
    UsersPage
} from "./Pages";


function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"users"} element={<UsersPage/>}>
                        <Route path={":id"} element={<UserDetailsPage/>}>
                            <Route path={"posts"} element={<UserPostsPage/>}/>
                        </Route>

                        <Route path={":id/albums"} element={<UserAlbumsPage/>}>
                            <Route path={":albumId/photos"} element={<PhotoPage/>}/>
                        </Route>
                    </Route>

                    <Route path={"posts"} element={<PostsPage/>}>
                        <Route path={":id"} element={<PostDetailPage/>}>
                            <Route path={"comments"} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>

                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
