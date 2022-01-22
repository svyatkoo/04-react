import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userServise} from "../../services/user.servise";
import UserPost from "../../components/UserPost/UserPost";
import "./user.post.page.css";

const UserPostsPage = () => {
    const {id} = useParams();
    const [userPosts, setUserPosts] = useState([]);
    useEffect(()=> {
        userServise.getAllPosts(id).then(value => setUserPosts([...value]))
    },[id])

    return (
        <div className="userPostsWrapper">
            {userPosts.map(post => <UserPost key={post.id} post={post} />)}
        </div>
    );
};

export {UserPostsPage};