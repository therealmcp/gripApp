import axios from "axios";

export default {
    login: (userObj) => {
        return axios.post("https://heroku-grip-app.herokuapp.com/auth/login", userObj);
    },
    logout: () => {
        return axios.post("https://heroku-grip-app.herokuapp.com/auth/logout")
    },
    getUser: () => {
        return axios.get("https://heroku-grip-app.herokuapp.com/auth/user")
    },
    registerUser: (userObj) => {
        return axios.post("https://heroku-grip-app.herokuapp.com/auth/signup", userObj)
    },
    saveClient: (clientObj, userId) => {
        return axios.post("https://heroku-grip-app.herokuapp.com/api/client/" + userId, clientObj)
    },
    getUserClients: (userId) => {
        return axios.get("https://heroku-grip-app.herokuapp.com/api/client/" + userId)
    }
}