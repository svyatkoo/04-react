import "./user.css";

const User = (props) => {
    const {user, getUserId} = props;

    return (
        <div className="userContainer">
            <h4>{user.id}</h4>
            <h4>{user.name}</h4>
            <button onClick={() => getUserId(user.id)}>GetDetails</button>
        </div>
    );
};

export default User;
