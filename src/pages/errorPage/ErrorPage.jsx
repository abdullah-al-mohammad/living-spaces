import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    // console.log(error);
    
    return (
        <div className='text-center'>
            <h1 className='text-5xl'>User {error.statusText}</h1>
            <h1 className='text-5xl'>{error.status}</h1>
        </div>
    );
};

export default ErrorPage;