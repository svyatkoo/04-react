import {useState, useEffect} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postServise} from "../../services/post.servise";

const PostDetailPage = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const [post, setPost] = useState({});

    useEffect(()=> {
        postServise.getById(id).then(value => {
            if (state) {
                setPost(state)
            }
            setPost({...value})
        })
    }, [id])

    return (
        <>
            <div>
                <h1>Post Details</h1>
                <div>Id: {post.id}</div>
                <div>UserId: {post.userId}</div>
                <div>Title: {post.title}</div>
                <div>Body: {post.body}</div>
                <Link to={"comments"}>
                    <button>Post comments</button>
                </Link>
            </div>

            <div>
                <Outlet/>
            </div>
        </>
    );
};

export {PostDetailPage};