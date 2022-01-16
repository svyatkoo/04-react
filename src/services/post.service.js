// import {urls} from "../config/urls";

const getByUser = (id) => {
    // return fetch(`${urls.users}/${id}/posts`)
    return fetch("https://jsonplaceholder.typicode.com/users/"+id.id+"/posts")
        .then(value => value.json())
}

export default getByUser;