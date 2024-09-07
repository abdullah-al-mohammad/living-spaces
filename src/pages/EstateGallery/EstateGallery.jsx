import React from 'react';
import { useNavigate } from 'react-router-dom';

const EstateGallery = ({ estateData }) => {
    const navigation = useNavigate()
    const { estate_title, image, segment_name, description, id, status } = estateData
    const handleViewDetails = () =>{
        navigation(`/estate/${id}`)
        
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl mb-5">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p className='text-amber-400'>{segment_name}</p>
                <p className=''>{description}</p>
                <p className='text-white'>Status: {status}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleViewDetails()} className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default EstateGallery;