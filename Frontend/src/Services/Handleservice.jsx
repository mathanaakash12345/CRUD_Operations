import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:5001'

export const usercreate = async (userdata) =>{
    //console.log(userdata);
    return axios.post(`${URL}/user/create`,userdata)
}

export const deletuser = async (uemail)=>{
    return axios.delete(`${URL}/user/delete/${uemail}`)
}

export const fetchuser = async(useremail)=>{
    return axios.get(`${URL}/user/fetch/${useremail}`)
}

export const updateuser  = async({userdata,experience,Id})=>{
    return axios.put(`${URL}/user/update/${Id}`,{userdata,experience})
}

export const fetchalluser = async()=>{
    return axios.get(`${URL}/user/fetchall`)
}