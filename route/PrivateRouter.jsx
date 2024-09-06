import React from 'react';
import { AuthContext } from '../src/provider/AuthProvider';
import {useContext} from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext)
    
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;