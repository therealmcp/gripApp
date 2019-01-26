// import axios from "axios";

// export default {
//   getClient: function () {
//     return axios.get('/api/clients')
//   },
//   saveClient: (clientObj, userId) => {
//     return axios.post("https://heroku-grip-app.herokuapp.com/api/clients/" + userId, clientObj)
//   },
//   getSession: function () {
//     return axios.get('/api/sessions')
//   },
//   registerUser: (userObj) => {
//     return axios.post("https://heroku-grip-app.herokuapp.com/auth/signup", userObj)
//   },
//   getUser: function () {
//     return axios.get('/api/users')
//   },
//   getWorkout: function () {
//     return axios.get('/api/workouts')
//   }
// }

// router.post("/client", (req, res) => {
//   axios
//     .get("http://localhost:3001", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

