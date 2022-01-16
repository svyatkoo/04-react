const User = (props) => {
    const {user: {id, name, username, email}} = props;
    return (
        <div>
            {id} {name} --- {username} --- {email}
        </div>
    );
};

export default User;