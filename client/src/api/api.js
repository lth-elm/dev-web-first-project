const apiPaths = {
  loginUrl: '/auth/token',
  checkToken: '/user'
}

const jsonClient = (url, options) => fetch(
  '/api/v1' + url,
  {
    ...options,
    headers: {
      ...options.headers,
      'content-type': 'application/json'
    },
    body: JSON.stringify(options.body)
  })
  .then(res => res.json())

const api = {
  login (credentials) {
    return jsonClient(
      apiPaths.loginUrl,
      {
        method: 'post',
        body: credentials
      }
    )
  },
  checkToken () {
    const token = localStorage.getItem('token')
    return jsonClient(apiPaths.checkTokenUrl, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(data => data.user)
  }
}

export default api
