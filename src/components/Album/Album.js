import {Link} from "react-router-dom";

import  "./album.css";

const Album = ({album}) => {
    const {userId, id, title} = album;

    return (
        <div>
            <div className="albumContainer">
                <p>UserId: {userId}</p>
                <p>Id: {id}</p>
                <p>Title: {title}</p>
                <Link to={id+"/photos"}><button>Photo</button></Link>
            </div>

        </div>
    );
};

export default Album;