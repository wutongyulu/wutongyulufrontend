import axios from 'axios'
import store from '@/store'
// 封装的请求发送更利于维护后期
export function request(config){
 const request = axios.create({
    //  baseURL:'http://localhost:8080',
     baseURL:'http://localhost:8095/',
    //测试
    //  baseURL:'https://autumnfish.cn',
     timeout:30000
 })
//axios拦截器

//请求拦截
request.interceptors.request.use(config=>{
    console.log('请求发送拦截成功');
    store.state.requestStatus = true;
    return config
},err=>{
    console.log('请求失败拦截成功');
   
})
//响应拦截
request.interceptors.response.use(result=>{
    store.state.requestStatus = false;
    console.log('响应接收拦截成功');
    return result.data
},err=>{
    store.state.requestStatus = false;
    console.log('响应失败拦截成功');
})

//发送真正的网络请求
 return request(config)
}