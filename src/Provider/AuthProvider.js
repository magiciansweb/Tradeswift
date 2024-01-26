"use client"
import auth from "@/Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext([])

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])

    const signup = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {
        return signOut(auth)
    }


    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
        })
        return()=>{
            return subscribe
        }
    },[])

    const authinfo = {
        signup,signin,user,logout
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;