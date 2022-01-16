import UserPost from "../UserPost/UserPost";
import "./userPosts.css";

const UserPosts = ({userPostsList}) => {
    return (
        <div className="posts">
            <h1>Posts</h1>
            <div className="postsWrapper">
                {userPostsList.map(post => <UserPost key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export default UserPosts;