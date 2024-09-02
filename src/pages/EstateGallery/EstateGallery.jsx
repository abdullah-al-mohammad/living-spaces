import React from 'react';

const EstateGallery = ({ estateData }) => {
    const { estate_title, image } = estateData
    return (
        <div className="card bg-base-100 w-96 shadow-xl mb-5">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default EstateGallery;