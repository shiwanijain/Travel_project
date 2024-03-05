import React, { useState } from 'react';
import './Carousel.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Carousel = ({ testimonies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length);
    };

    return (
        <div className='flex justify-center'>
            <button onClick={handlePrev} ><ChevronLeftIcon fontSize='large' /></button>
            <div className="testimonial-card mx-2">
                <img src={testimonies[currentIndex].image} alt="no" />
                <p className='content'>{testimonies[currentIndex].testimonial}</p>
                <p className='name'>- {testimonies[currentIndex].name}</p>
            </div>
            <button onClick={handleNext}><ChevronRightIcon fontSize='large' /></button>
        </div>
    );
};

export default Carousel;