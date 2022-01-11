import {useEffect, useState} from "react";
import Comment from "../comment/comment";

import "./comments.css";


const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(value => value.json())
            .then(value => setComments(value))
    }, [])

    return (
        <div className="commentsContainer">
            {comments.map(comment => <Comment key = {comment.id} comment = {comment} />)}
        </div>
    )
}

export default Comments;