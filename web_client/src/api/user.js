import client from '../utils/fetch'

export function login(username, password) {
  const data = {
    username,
    password
  }
  return client({
    url: '/login',
    method: 'post',
    data
  })
}

export function getUserInfo() {
  return client({
    url: '/user/info',
    method: 'get'
  })
}

export function logout() {
  return client({
    url: '/logout',
    method: 'post'
  })
}

export function getUserListInfoRequest(query) {
  return client({
    url: '/user/list',
    method: 'get',
    params: query
  })
}


export function add(data) {
  return request({
    url: 'user',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: '/user' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: '/user',
    method: 'put',
    data
  })
}
