import axios from "axios";

export default {
  getClient: function () {
    return axios.get('/api/clients')
  },
  getClients: function (trainerID) {
    return axios.get('https://heroku-grip-app.herokuapp.com/api/clients/' + trainerID)
  },
  saveClient: (clientObj) => {
    return axios.post("https://heroku-grip-app.herokuapp.com/api/clients/", clientObj)
  },
  getSession: function () {
    return axios.get('/api/sessions')
  },
  saveSession: (sessionObj) => {
    return axios.post("https://heroku-grip-app.herokuapp.com/api/sessions/", sessionObj)
  },
  registerUser: (userObj) => {
    return axios.post("https://heroku-grip-app.herokuapp.com/auth/signup", userObj)
  },
  getTrainer: function () {
    return axios.get('/api/trainers')
  },
  getWorkout: function () {
    return axios.get('/api/workouts')
  }
}

// router.post("/client", (req, res) => {
//   axios
//     .get("http://localhost:3001", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

