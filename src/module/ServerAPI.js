import axios from "axios" ;
import { APIObjConverter } from "./Utility";
const AWSserver = "http://bbdnserver-env.eba-a4c5kpmb.ap-northeast-2.elasticbeanstalk.com";

const makeRequest = ( path , params ) => 
   axios.get(`${AWSserver}${path}`, {
        params : {
            ...params ,
        }
   });

const makePostRequest = ( path, data , params ) => 
    axios.post(`${AWSserver}${path}`, data);

const makePutRequest = ( path, data , params ) => 
    axios.put(`${AWSserver}${path}`, data);


const getResponse = async (path , params) => {
    try{
        const {
            data : { results} , 
            data 
        } = await makeRequest(path , params) ;
        return [ results || data , null ]
    }catch(e){
        return [ null , e];
    }
}

const getPostResponse = async ( path, postData ) => {
    try{
        const {
            data : { results} , 
            data 
        } = await makePostRequest(path , postData) ;        
        return [ results || data , null ]
    }catch(e){
        return [ null , e];
    }
}


const getPutResponse = async ( path, putData ) => {
    try{
        const {
            data : { results} , 
            data 
        } = await makePutRequest(path , putData) ;        
        return [ results || data , null ]
    }catch(e){
        return [ null , e];
    }
}


export const UserAPI = {
    SignInGoogle : (userData)=> getPostResponse(`/users/account/google`, APIObjConverter.GoogleUser(userData) ) ,
    SignInApple : (userData)=> getPostResponse(`/users/account/apple`, userData) ,
    ModifyNickName : (userData) => getPutResponse(`/users/account/nickname`, userData) ,
}


export const MapAPI = {
    SearchAddress : (params)=> getResponse("/location/list/kakao" , params)
}