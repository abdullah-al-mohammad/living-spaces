import {createContext} from 'react'
import React from 'react';



export const AuthContext = createContext(nul)
const auth = getAuth()


const AuthProvider = ({children}) => {

    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;