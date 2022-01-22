import {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {userServise} from "../../services/user.servise";
import Album from "../../components/Album/Album";
import "./user.albums.page.css";

const UserAlbumsPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userServise.getAllAlbums(id).then(value => setAlbums([...value]));
    }, [id])

    return (
        <div className="albumsWrapper">
            <div>
                <h1>UserAlbumsPage</h1>
                {albums.map(album => <Album key={album.id} album={album}/>)}
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserAlbumsPage};