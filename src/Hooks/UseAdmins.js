"use client"
import React, { useEffect, useState } from 'react';
import useAxios from './useAxios';
import useAuth from './useAuth';

const UseAdmins = () => {
    const [userInfo,setUserInfo] = useState([])
    const {user} = useAuth();
    const axios = useAxios();
    useEffect(()=>{
        axios.get(`/users/${user?.email}`)
        .then(res=>{
            setUserInfo(res.data)
        })
    },[axios, user?.email])
    return [userInfo]
}

export default UseAdmins;