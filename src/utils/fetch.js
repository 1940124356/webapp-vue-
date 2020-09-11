// 1. 引入 axios
import axios from "axios"

// axios.defaults.baseURL = 'http://localhost:8080/'
// let baseURL = 'http://rap2.taobao.org:38080'    //生产环境
let baseURL = 'http://localhost:8080/'       //开发环境

const instance = axios.create({
  baseURL:baseURL,
  timeout: 7000,
  headers: {}
});


// 配置一个 请求 的拦截器
instance.interceptors.request.use(function (config) {
  console.log('请求拦截',config)
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应的拦截器
instance.interceptors.response.use(function (response) {
  // 返回返回数据中的 data 
  console.log('响应拦截器',response)
  return response.data.data.data;
}, function (error) {
  return Promise.reject(error);
});

// 导出自定义的 axios
export default instance 

// // KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS
// let data = config.data || {};// get 请求时候是没有 data 防御性代码
// // data["oauth_token"] = "KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS";// 在登录的情况下是存在 如果没有登录是不存在的
// config.headers.Authorization ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE1OTg0ODk1NTAsImV4cCI6MTU5ODU3NTk1MH0.kueN5YYl-5ngt7ew6uxmiJsZ34NJiQr-cuddnMnWBLI'
// config.data = data;