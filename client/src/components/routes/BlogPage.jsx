import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import ImageGrid from '../UI/ImageGrid';

function BlogPage() {
    const [blogData, setBlogData] = useState([]);
    const blogId = useParams();
    const { id } = blogId;

    const searchBlogById = useCallback(async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/tour/${id}/`);
        const data = await response.json();
        const dateStr = data.created_at;
        const date = new Date(dateStr);
        const humanReadableDate = `${date.toLocaleDateString()}`;
        data.humanReadableDate = humanReadableDate;
        setBlogData(data);
        console.log(data);
        console.log(humanReadableDate);
    }, [id]);

    useEffect(() => {
        searchBlogById();
    }, [searchBlogById]);


    return (
        <div className='flex flex-col'>
            <div className='text-center font-bold text-2xl md:text-4xl my-6'>{blogData.title}</div>
            <ImageGrid images={["../../waterfall.webp", "../../waterfall.webp", "../../waterfall.webp", "../../waterfall.webp", "../../waterfall.webp", "../../waterfall.webp"]} />
            <div className='text-md md:text-lg text-center w-[90%] md:w-[70%] mx-auto my-6 p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium numquam accusamus dicta quod? Facilis tenetur, saepe at harum repellat minus tempora rerum quia explicabo eius. Esse facere odit deleniti consequatur nulla excepturi quaerat architecto nostrum tempora non! Odit asperiores voluptatem sequi totam voluptates vero dolorum. Quam vitae, asperiores harum perspiciatis expedita aliquid corporis, ea ab dolorem illum dolore voluptatum?</div>
            <div className='w-[70%] text-right font-bold text-slate-500 text-md md:text-xl mx-auto'>~posted on: {blogData.humanReadableDate}</div>
            <div className='w-[70%] mx-auto text-right p-2 text-xl font-bold'>Contact: {blogData.contact_details}</div>
        </div>
    )
}

export default BlogPage