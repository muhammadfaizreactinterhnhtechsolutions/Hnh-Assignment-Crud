import axios from "axios";

export const Helper = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})
export const Helpers = axios.create({
    baseURL: "http://curdapi.pythonanywhere.com"
})