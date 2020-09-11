import axios from './fetch'

//封装axios方法
export function getLogin(params){
    return axios({
        url:'login',
        method:'GET',
        params
    })
}

export function fetchGoodList(params){
    console.log('api')
    return axios({
        url:'/app/mock/264675/jd/home/list',
        method:'GET',
        params
    })
}

export default {
    getLogin,
    fetchGoodList,
}