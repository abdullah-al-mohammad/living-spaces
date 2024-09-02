import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../navigation/Navbar';
import EstateGallery from '../EstateGallery/EstateGallery';

const Estate = () => {
    const loadData = useLoaderData()
    // console.log(loadData);

    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>

            <div className='grid grid-cols-3'>
                {
                    loadData.map((data) => <EstateGallery key={data.id} estateData={data}></EstateGallery>)
                }
            </div>

        </div>
    );
};

export default Estate;