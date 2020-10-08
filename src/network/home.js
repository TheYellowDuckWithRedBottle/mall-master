import {request} from './request.js';
export function getHomeMutidata(){
    return request({
        url:'/home/multidata'
    })
}
export function getData(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}