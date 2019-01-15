import axios from "axios";

export default {
  getClient: function () {
    return axios.get('/api/clients')
  }
}
