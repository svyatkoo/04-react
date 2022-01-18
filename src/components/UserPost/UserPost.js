import "./userPost.css";

const UserPost = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div className="postWrapper">
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default UserPost;