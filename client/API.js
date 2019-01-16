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
