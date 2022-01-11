

const Post = (props) => {
    const {post: {id, title, body}} = props;
    return (
        <div className="postItem">
            <h4>{id}</h4>
            <p>Title: {title}</p>
            <p>{body}</p>
        </div>
    )
}

export default Post;