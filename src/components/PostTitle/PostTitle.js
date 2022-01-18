import {Link} from "react-router-dom";

const PostTitle = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <Link to={id.toString()} state={post}>{id}) {title}</Link>
        </div>
    );
};

export default PostTitle;