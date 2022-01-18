import {useEffect, useState} from "react";

import {useLocation} from "react-router-dom";

import {postServise} from "../../services/post.servise";
import PostTitle from "../../components/PostTitle/PostTitle";
import PostDetails from "../../components/PostDetails/PostDetails";
import PostComments from "../../components/PostComments/PostComments";
import "./posts.page.css";

const PostsPage = () => {
    const {state} = useLocation();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postServise.getAll().then(value => setPosts([...value]));
    }, [])

    return (
        <div className="postsPageWrapper">
            <div className="postsPageLeft">
                <h1>PostsPage</h1>
                {posts.map(post => <PostTitle key={post.id} post={post}/>)}
            </div>

            <div className="postsPageLeft">
                <PostDetails/>

                <div>
                    {state ? <PostComments/> : null}
                </div>
            </div>

        </div>
    );
};

export default PostsPage;