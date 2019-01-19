import axios from "axios";

export default {
  getClient: function () {
    return axios.get('/api/clients')
  },

  getSession: function () {
    return axios.get('/api/sessions')
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

