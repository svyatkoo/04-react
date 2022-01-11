const Comment = (props) => {
    const {comment: {id, name, email, body}} = props;

    return (
        <div className="commentItem">
            {id} --- {name} --- {email}
            <p>{body}</p>
        </div>
    )
}

export default Comment;