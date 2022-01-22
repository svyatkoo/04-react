import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumsServise = {
    getAll:()=> axiosService(urls.albums).then(value => value.data),
    getById:(id) => axiosService(`${urls.albums}/${id}`).then(value => value.data),
    getAllPhotos:(id) => axiosService(`${urls.albums}/${id}/photos`).then(value => value.data)
}