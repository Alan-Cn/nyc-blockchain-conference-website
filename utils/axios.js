import axios from 'axios'

// 拦截器
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

// 请求配置
axios.interceptors.request.use((config) => {
  config.headers['Accept'] = 'application/json;charset=UTF-8'
  config.timeout = 5000
  return config;
}, (error) => {
  return Promise.reject(error)
})

// get
export function handleGet({
  url,
  params = {}
}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params,
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

// post
export function handlePost({
  url,
  data
}) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      data
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export default axios
