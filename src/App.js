import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UsersPage from "./Pages/UsersPage/UsersPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route path={"users"} element={<UsersPage/>}/>
          <Route path={"posts"} element={<PostsPage/>}/>
          <Route path={"*"} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
