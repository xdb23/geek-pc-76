import axios from 'axios'
// const baseURL = 'https://autumnfish.cn/api/'
const baseURL = 'http://geek.itheima.net/v1_0'
const request = axios.create({
    baseURL
})

// 添加请求拦截器
request.interceptors.request.use(
    function (config) {
        console.log('request-run');
        return config  
    },
    function (error) {
        return Promise.reject(error)
    }
)

// 添加相应拦截器
request.interceptors.response.use(
    function (response) {
        console.log('response-run');
        return response  
    },
    function (error) {
        return Promise.reject(error)
    }
)
export { request } 