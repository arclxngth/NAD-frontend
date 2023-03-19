import axios from 'axios'

const loginOptions = { header: { "Content-type": "x-www-form-urlencoded" } };

export function loginQuery(username, password) {
  return new Promise((resolve, reject) => {
    axios
      .post("https://nad-backend-production.up.railway.app/api/login", new URLSearchParams({ username, password }), loginOptions)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  })
}

export function getTrafficsQuery(token) {
  return new Promise((resolve, reject) => {
    axios
      .get("https://nad-backend-production.up.railway.app/api/traffics", {
        headers: { "Authorization": token } 
      })
      .then((res) => resolve(res.data))
      .catch(reject)
  })
}

export function createTrafficDummies(amount, token) {
  return new Promise((resolve, reject) => {
    axios
    .post("https://nad-backend-production.up.railway.app/api/traffics",
      new URLSearchParams({ amount }),
      {
        header: { "Content-type": "x-www-form-urlencoded" },
        headers: { "Authorization": token }
      }
    )
      .then((res) => resolve(res.data))
      .catch(reject)
  })
}