import React from 'react';
import {createContext, useState, useEffect} from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import app from '../firebase/firebase.config';



export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({children}) => {   // Accept children as props

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true) // To manage loading state


    // create user by sign up or register
    const registerUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // loggedIn User
    const loginUser = (email, password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    // loggedOutUser
    const logOut = ()=>{
        setLoading(true)
       return signOut(auth)
    }

    // user useState change
    useEffect(()=>{
        const unsubsCribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubsCribe()
    },[])

    const authInfo = {
        auth,
        loading,
        user,
        registerUser,
        loginUser,
        logOut,


    } // Can include other auth-related functions or data

    return (
        <AuthContext.Provider value={authInfo}>
            {children} // Render the children components
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;