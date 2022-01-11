const User = (props) => {
    const {user: {id, name, username, email}} = props;
    return (
        <div className="userItem">
            <h4>{id} --- Name: {name}</h4>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <hr/>
        </div>
    )
}

export default User;