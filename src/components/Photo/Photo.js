import "./photo.css";

const Photo = ({photo}) => {
    const {title, thumbnailUrl} = photo;

    return (
        <div className="photoWrap">
            <div>{title}</div>
            <div>
                <img src={thumbnailUrl} alt={title} />
            </div>
        </div>
    );
};

export default Photo;