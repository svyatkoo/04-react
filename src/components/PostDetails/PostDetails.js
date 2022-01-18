import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";

import {postServise} from "../../services/post.servise";
import "./post.details.css";

const PostDetails = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const [show, toggleShow] = useState(true);
    const [post, setPost] = useState({});

    useEffect(() => {
        if (state) {
            setPost(state);
            return;
        }
        postServise.getById(id).then(value => setPost({...value}))
    }, [post.id])

    return (
        <div className="postDetails">
            <h1>Post Details</h1>
            <div>Id: {post.id}</div>
            <div>UserId: {post.userId}</div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>

            <Link to={id + "/comments"} state={show}>
                <button onClick={() => toggleShow(!show)}> User Posts</button>
            </Link>
        </div>
    );
};

export default PostDetails;