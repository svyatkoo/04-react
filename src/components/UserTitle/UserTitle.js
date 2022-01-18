import {Link} from "react-router-dom";

import "./UserTitle.css";

const UserTitle = ({user}) => {
    const {id, name} = user;
    return (
        <div className="userTitle">
            <Link to={id.toString()} state={user}>{id}) {name}</Link>
        </div>
    );
};

export default UserTitle;