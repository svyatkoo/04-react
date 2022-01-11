const Comment = (props) => {
    const {comment: {id, name, email}} = props;

    return (
        <ul className="commentItem">
            <li>{id} --- {name} --- (email: {email}).</li>
        </ul>
    )
}

export default Comment;