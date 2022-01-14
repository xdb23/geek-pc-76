import { message } from 'antd';
import axios from 'axios'
import { getToken, isAuth } from '.';
// const baseURL = 'https://autumnfish.cn/api/'
const baseURL = 'http://geek.itheima.net/v1_0'
const request = axios.create({
    baseURL
})

// 添加请求拦截器
request.interceptors.request.use(
    function (config) {
        if(isAuth()) {
            config.headers!['Authorization'] = `Bearer ${getToken()}`
        }
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
        message.error(error.response.data.message)
        return Promise.reject(error)
    }
)
export { request } 