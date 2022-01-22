import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {albumsServise} from "../../services/album.service";
import Photo from "../../components/Photo/Photo";

const PhotoPage = () => {
    const {albumId} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(()=> {
        albumsServise.getAllPhotos(albumId).then(value => setPhotos(value))
    }, [albumId])

    return (
        <div>
            PhotoPage
            {photos.map(photo => <Photo key={photo.id} photo={photo} />)}
        </div>
    );
};

export {PhotoPage};