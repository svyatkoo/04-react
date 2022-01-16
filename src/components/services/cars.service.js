import axios from 'axios';
import {urls} from "../config/urls";

export const carsService = {
    create:(car) => axios.post(urls.cars, car).then(value => value.data),
    getAll:axios.get(urls.cars).then(value => value.data),
    getByid:(id) => axios.get(`${urls.cars}/${id}`).then(value => value.data),
    updateById:(id, car) => axios.patch(`${urls.cars}/${id}`, car).then(value => value.data),
    delateById: (id) => axios.delete(`${urls.cars}/${id}`)
}