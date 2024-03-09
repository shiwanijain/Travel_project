import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageGrid from '../UI/ImageGrid';

function BlogPage() {
    const [blogData, setBlogData] = useState([]);
    const blogId = useParams();
    const { id } = blogId;
    useEffect(() => {
        searchBlogById();
    }, [])
    const searchBlogById = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/blog-post/${id}/`);
        const data = await response.json();
        const dateStr = blogData.created_at;
        const date = new Date(dateStr);

        const humanReadableDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        data.humanReadableDate = humanReadableDate;
        setBlogData(data);
        console.log(data);
        console.log(humanReadableDate);
    }


    return (
        <div className='flex flex-col'>
            <div className='text-center font-bold text-2xl md:text-4xl my-6'>{blogData.title}</div>
            <ImageGrid images={["../../waterfall.webp", "../../waterfall.webp", "../../waterfall.webp", "../../waterfall.webp", "../../waterfall.webp", "../../waterfall.webp"]} />
            <div className='text-md md:text-lg text-center w-[80%] mx-auto my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium numquam accusamus dicta quod? Facilis tenetur, saepe at harum repellat minus tempora rerum quia explicabo eius. Esse facere odit deleniti consequatur nulla excepturi quaerat architecto nostrum tempora non! Odit asperiores voluptatem sequi totam voluptates vero dolorum. Quam vitae, asperiores harum perspiciatis expedita aliquid corporis, ea ab dolorem illum dolore voluptatum?</div>
            <div className='w-[70%] text-right font-bold text-slate-500 text-md md:text-xl mx-auto'>~{blogData.author} || posted on: {blogData.humanReadableDate}</div>
        </div>
    )
}

export default BlogPage