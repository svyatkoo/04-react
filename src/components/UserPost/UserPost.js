import "./userPost.css";

const UserPosts = (props) => {
    const {post: {userId, id, title, body}} = props;
    return (
        <div className="postContainer">
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default UserPosts;