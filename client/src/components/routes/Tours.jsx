import React, { useEffect, useState, useRef } from 'react'
import TourCard from '../UI/TourCard'
import SearchIcon from '@mui/icons-material/Search';

function Tours() {
    const [cardData, setCardData] = useState([]);
    const inputRef = useRef();

    async function getAllTours() {
        const response = await fetch('http://127.0.0.1:8000/api/allTours/');
        const data = await response.json();
        setCardData(data);
        console.log(data);
    }
    useEffect(() => {
        getAllTours();
    }, [])

    async function searchTours() {
        const currentInput = inputRef.current.value;
        const response = await fetch(`http://http://127.0.0.1:8000/api/` + currentInput);
        const data = await response.json();
        setCardData(data);
        console.log(data);
    }
    return (
        <div>
            <div className='flex justify-center gap-4'>
                <input ref={inputRef} type="text" placeholder='search city to travel' name="" id="" className='border-2 placeholder:text-center p-2' />
                <SearchIcon fontSize='large' />
            </div>
            {cardData.map((data, index) => (
                <TourCard
                    key={data.id}
                    place={data.title}
                    description={data.summary}
                    author={data.faq}
                />
            ))}
            <TourCard place={{ name: "Paris", picture: "../../../waterfall.webp" }} description="This is a great place to visit." author="John Doe" />
        </div>
    )
}

export default Tours