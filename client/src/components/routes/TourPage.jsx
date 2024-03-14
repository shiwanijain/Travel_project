import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import ImageGrid from '../UI/ImageGrid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScheduleIcon from '@mui/icons-material/Schedule';

function TourPage() {
    const [blogData, setBlogData] = useState([]);
    const [days, setDays] = useState([]);
    const blogId = useParams();
    const { id } = blogId;

    const searchBlogById = useCallback(async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/tour/${id}/`);
        const data = await response.json();
        const dateStr = data.created_at;
        const date = new Date(dateStr);
        const humanReadableDate = `${date.toLocaleDateString()}`;
        data.humanReadableDate = humanReadableDate;
        const days = data.itinerary.split('\r\n');
        setBlogData(data);
        setDays(days);
        console.log(data);
    }, [id]);

    useEffect(() => {
        searchBlogById();
    }, [searchBlogById]);


    return (
        <div className='flex flex-col'>
            <div className='text-center font-bold text-xl md:text-4xl my-4'>{blogData.title}</div>
            <div className='text-md md:text-lg font-medium text-slate-500 text-left w-[90%] md:w-[70%] mx-auto mt-6 p-4'>{blogData.summary}</div>
            <div className='text-md md:text-lg font-medium text-slate-500 text-left w-[90%] md:w-[70%] mx-auto mb-6 p-4'>{blogData.details}</div>
            <div className='w-[70%] text-right font-bold text-slate-500 text-md md:text-xl mx-auto'>~posted on: {blogData.humanReadableDate}</div>
            <div className='w-[70%] mx-auto text-right text-xl font-bold'>Contact: {blogData.contact_details}</div>
            <div className='w-[90%] md:w-[70%] mx-auto my-4 flex flex-col gap-4 text-lg md:text-2xl font-bold p-2 md:p-6 text-slate-600'>
                <div>Starting from: <AttachMoneyIcon />{blogData.starting_price}</div>
                <div><ScheduleIcon /> {blogData.number_of_days}Days</div>
                <ul>
                    {days.map((day, index) => <li key={index}>{day}</li>)}
                </ul>
            </div>
            <ImageGrid images={["../../../waterfall.webp", "../../../waterfall.webp"]} />
        </div>
    )
}

export default TourPage