import axios from "axios";

export default {
    login: (userObj) => {
        return axios.post("http://localhost:3001/auth/login", userObj);
    },
    logout: () => {
        return axios.post("http://localhost:3001/auth/logout")
    },
    getUser: (userID) => {
        return axios.get("http://localhost:3001/auth/user/" + userID)
    },
    getUserStuff: (userID) => {
        return axios.get("http://localhost:3001/api/users/" + userID)
    },
    registerUser: (userObj) => {
        return axios.post("http://localhost:3001/auth/signup", userObj)
    },
    saveClient: (clientObj) => {
        return axios.post("http://localhost:3001/api/clients/", clientObj)
    },
    /* getUserClients: (userId) => {
        return axios.get("http://localhost:3001/api/clients/" + userId)
    } */
    getClient: (clientID) => {
        return axios.get("http://localhost:3001/api/clients/" + clientID)
    },
    getSession: (sessionID) => {
        return axios.get("http://localhost:3001/api/sessions/" + sessionID)
    },
    saveSession: (sessionObj) => {
        return axios.post("http://localhost:3001/api/sessions/", sessionObj)
    },
    addWorkout: (sessionID) => {
        return axios.put("http://localhost:3001/api/workouts/" + sessionID)
    },
}

