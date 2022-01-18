import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userServise} from "../../services/user.servise";
import UserPost from "../UserPost/UserPost";
import "./userPosts.css"

const UserPosts = () => {
    const {id} = useParams();

    const [userPosts, setUserPosts] = useState([]);
    useEffect(()=> {
        userServise.getAllPosts(id).then(value => setUserPosts([...value]))
    },[id])

    console.log(userPosts);

    return (
        <div className="userPostsWrapper">
            {userPosts.map(post => <UserPost key={post.id} post={post} />)}
        </div>
    );
};

export default UserPosts;