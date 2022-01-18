import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postServise} from "../../services/post.servise";
import PostComment from "../PostComment/PostComment";

const PostComments = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postServise.getCommentsById(id).then(value => setComments(value))
    }, [id])

    return (
        <div>
            <h1>Post Comments</h1>
            {comments.map(comment => <PostComment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default PostComments;