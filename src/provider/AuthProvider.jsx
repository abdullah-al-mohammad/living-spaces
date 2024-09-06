import React from 'react';
import {createContext, useState, useEffect} from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import app from '../firebase/firebase.config';



export const AuthContext = createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {   // Accept children as props

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true) // To manage loading state


    // create user by sign up or register
    const registerUser = (email, password, photo, name) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password, name, photo)
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

    // google sign in
    const googleSignIn = () =>{
       return signInWithPopup(auth, provider)
    }

     // function for Track user state
    useEffect(()=>{
        const unsubsCribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state  change',currentUser);
            setUser(currentUser)
            setLoading(false)
        })

        // Cleanup subscription on unmount
        return () => unsubsCribe()
    },[])

    const authInfo = {
        auth,
        loading,
        user,
        registerUser,
        loginUser,
        logOut,
        googleSignIn


    } // Can include other auth-related functions or data

    return (
        <AuthContext.Provider value={authInfo}>
            {children} // Render the children components
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;