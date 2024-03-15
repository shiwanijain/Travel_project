import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card from '../UI/Card';

function Home() {
    return (
        <>
            <div className='flex flex-col md:flex-row mt-12 w-[80%] justify-center gap-6 mx-auto'>
                <div className='flex flex-col gap-10'>
                    <div className='text-blue-400 text-lg lg:ml-10'>Book with us</div>
                    <div className='text-4xl lg:text-[4rem] w-[70%] font-bold leading-normal'>Find next place to visit</div>
                    <div className='text-xl text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, est.</div>
                </div>
                <div className='hidden md:block'>
                    <img src="../../../public/waterfall.webp" alt="location" className='rounded-3xl ' />
                </div>
            </div>
            <div className='w-[80%] flex flex-col mx-auto gap-8 text-center mt-16 lg:mt-24 mb-10'>
                <div className='text-4xl lg:text-5xl font-bold text-center'>Top Destinations</div>
                <div className='text-lg text-slate-400'>Explore our top destinations voted by more than 100,000+ customers around the world.</div>
                <button className='text-slate-600 underline'>All Destinations <span><ArrowRightAltIcon /></span></button>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap w-[80%] mx-auto lg:gap-x-8 justify-center'>
                <Card continent={"asia"} />
                <Card continent={"africa"} />
                <Card continent={"europe"} />
                <Card continent={"australia"} />
                <Card continent={"north america"} />
                <Card continent={"south america"} />
            </div>
        </>
    )
}

export default Home