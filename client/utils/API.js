import axios from "axios";

export default {
    login: (userObj) => {
        return axios.post("http://localhost:3001/auth/login", userObj);
    },
    logout: () => {
        return axios.post("http://localhost:3001/auth/logout")
    },
    getUser: () => {
        return axios.get("http://localhost:3001/auth/user")
    },
    registerUser: (userObj) => {
        return axios.post("http://localhost:3001/auth/signup", userObj)
    },
    saveClient: (clientObj, userId) => {
        return axios.post("http://localhost:3001/api/client/" + userId, clientObj)
    },
    getUserClients: (userId) => {
        return axios.get("http://localhost:3001/api/client/" + userId)
    }
}