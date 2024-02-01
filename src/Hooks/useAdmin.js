"use client"

import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const UseAdmin = () => {
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
};

export default UseAdmin;