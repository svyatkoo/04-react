
const Post = (props) => {
    const {post: {id, title}} = props;
    return (
        <div className="postItem">
            <h6>{id} Title: {title}</h6>
        </div>
    )
}

export default Post;