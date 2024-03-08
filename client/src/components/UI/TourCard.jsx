import React from 'react';
import './TourCard.css';
const TourCard = ({ place, description, author }) => {
    return (
        <div className="tour-card">
            <img src={place.picture} alt={place.name} />
            <div className="card-body">
                <h3 className='destination'>{place.name}</h3>
                <p>{description}</p>
                <p className='author'>Author: {author}</p>
            </div>
        </div>
    );
};

export default TourCard;