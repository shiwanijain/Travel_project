import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card from '../UI/Card';
import Carousel from '../UI/Carousel';
import { useNavigate } from "react-router-dom";
import CardCarousel from '../UI/CardCarousel';

const cardData = [
    {
        continent: "Asia"
    },
    {
        continent: "Africa"
    },
    {
        continent: "Europe"
    },
    {
        continent: "Australia"
    },
    {
        continent: "North America"
    },
    {
        continent: "South America"
    }
];

const testimonialData = [
    {
        image: "../../../waterfall.webp",
        name: "John Doe",
        testimonial: "This is a great service. I highly recommend it."
    },
    {
        image: "../../../waterfall.webp",
        name: "Jane Doe",
        testimonial: "I had a fantastic experience!"
    },
    {
        image: "../../../waterfall.webp",
        name: "Jim Doe",
        testimonial: "Excellent customer service and great value."
    }
];

function Home() {
    const navigate = useNavigate();
    const searchCardHandler = () => {
        navigate('/tours');
    };

    const handleNavigateToBlogs = () => {
        navigate('/blogs');
    };

    return (
        <>
            <div className='flex flex-col md:flex-row mt-12 w-[80%] justify-center gap-6 mx-auto'>
                <div className='flex flex-col gap-10'>
                    <div className='text-blue-400 text-lg lg:ml-10'>Book with us</div>
                    <div className='text-4xl lg:text-[4rem] w-[70%] font-bold leading-normal'>Find next place to visit</div>
                    <div className='text-xl text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, est.</div>
                </div>
                <div className='hidden md:block'>
                    <img src="../../../waterfall.webp" alt="location" className='rounded-3xl ' />
                </div>
            </div>
            <div className='w-[80%] flex flex-col mx-auto gap-8 text-center mt-16 lg:mt-24 mb-10'>
                <div className='text-4xl lg:text-5xl font-bold text-center'>Top Destinations</div>
                <div className='text-lg text-slate-400'>Explore our top destinations voted by more than 100,000+ customers around the world.</div>
                <button onClick={handleNavigateToBlogs} className='text-slate-600 underline'>All Destinations <span><ArrowRightAltIcon /></span></button>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap w-[80%] mx-auto lg:gap-x-8 justify-center'>
                {cardData.map((data, index) => (
                    <button key={index} onClick={searchCardHandler}><Card continent={data.continent} /></button>
                ))}
            </div>
            <div className="flex flex-col w-[80%] justify-center gap-12 mx-auto">
                <div className='text-center font-bold mt-6 md:mt-12 text-3xl md:text-5xl'>Testimonies</div>
                <Carousel testimonies={testimonialData} />
            </div>
        </>
    )
}

export default Home