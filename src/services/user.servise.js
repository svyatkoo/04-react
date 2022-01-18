import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const userServise = {
    getAll:()=> axiosService(urls.users).then(value => value.data),
    getById:(id) => axiosService(`${urls.users}/${id}`).then(value => value.data)
}