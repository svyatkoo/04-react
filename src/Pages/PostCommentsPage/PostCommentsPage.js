import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {postServise} from "../../services/post.servise";
import PostComment from "../../components/PostComment/PostComment";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postServise.getCommentsById(id).then(value => setComments(value))
    }, [id])

    return (
        <div>
            <h1>Post Comments</h1>
            {comments && comments.map(comment => <PostComment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostCommentsPage};