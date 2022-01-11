const User = (props) => {
    const {user: {id, name, username, email}} = props;
    return (
        <div className="userItem">
            {id} ---- {name} ---- {username} --- {email}
        </div>
    )
}

export default User;