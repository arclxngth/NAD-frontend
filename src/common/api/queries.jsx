import axios from 'axios'

const options = { header: { "Content-type": "x-www-form-urlencoded" } };

export function loginQuery(username, password) {
  return new Promise((resolve, reject) => {
    axios
      .post("https://nad-api.onrender.com/api/login", new URLSearchParams({ username, password }), options)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  })
}

export function getTrafficsQuery() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://nad-api.onrender.com/api/traffics")
      .then((res) => resolve(res.data))
      .catch(reject)
  })
}