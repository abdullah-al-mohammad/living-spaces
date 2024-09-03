import React from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

const EstateGalleryDetails = () => {
    const location = useLocation()
    const { id } = useParams()
    console.log(typeof(id));
    
    const data = useLoaderData()
    console.log(data);

    const [estateDetail, setEstateDetail] = useState(null)
    console.log( id, estateDetail);

    useEffect(() => {
        const estate = data.find(estateData => estateData.id === parseInt(id)
        )
        setEstateDetail(estate)
        console.log(typeof(estate.id));

    }, [])

    if(!estateDetail){
        return <p>page not found: {id}</p>
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 w-auto shadow-xl">
                <figure>
                    <img
                    src={estateDetail.image}
                    alt="estate" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{estateDetail.estate_title}</h2>
                    <p>{estateDetail.description}</p>
                    <p>Price: <span className='text-green-400'>{estateDetail.price}</span></p>
                    <p>Location: <span className='text-white'>{estateDetail.location}</span></p>
                    <p>Facilities: <span className='text-pink-400'>{`${estateDetail.facilities[0]}, ${estateDetail.facilities[1]}, ${estateDetail.facilities[2]}`}</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateGalleryDetails;