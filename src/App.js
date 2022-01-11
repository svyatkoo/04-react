import './App.css';
import Users from "./components/users/users";
import Posts from "./components/posts/posts";
import Comments from "./components/comments/comments";




function App() {
  return (
    <div className="App">
        <div className="header">
            <Users />
            <Posts />
        </div>

        <Comments />


    </div>
  );
}

export default App;
