import axios from "axios";

export default {
    login: (userObj) => {
        return axios.post("https://heroku-grip-app.herokuapp.com/auth/login", userObj);
    },
    logout: () => {
        return axios.post("https://heroku-grip-app.herokuapp.com/auth/logout")
    },
    getUser: (userID) => {
        return axios.get("https://heroku-grip-app.herokuapp.com/auth/user/" + userID)
    },
    getUserStuff: (userID) => {
        return axios.get("https://heroku-grip-app.herokuapp.com/api/users/" + userID)
    },
    registerUser: (userObj) => {
        return axios.post("https://heroku-grip-app.herokuapp.com/auth/signup", userObj)
    },
    saveClient: (clientObj) => {
        return axios.post("https://heroku-grip-app.herokuapp.com/api/clients/", clientObj)
    },
    /* getUserClients: (userId) => {
        return axios.get("https://heroku-grip-app.herokuapp.com/api/clients/" + userId)
    } */
    getClient: (clientID) => {
        return axios.get("https://heroku-grip-app.herokuapp.com/api/clients/" + clientID)
    },
    saveSession: (sessionObj) => {
        return axios.post("https://heroku-grip-app.herokuapp.com/api/sessions/", sessionObj)
    },
    getSession: (sessionID) => {
        return axios.get("https://heroku-grip-app.herokuapp.com/api/sessions/" + sessionID)
    },
    addWorkout: (sessionID) => {
        return axios.put("https://heroku-grip-app.herokuapp.com/api/workouts/" + sessionID)
    },
}

