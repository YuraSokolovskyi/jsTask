import {BASE_URL} from "./constants";

export default function getUserData(path) {
    return fetch(`${BASE_URL}/${path}`)
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error))
}