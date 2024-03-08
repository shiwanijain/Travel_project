import React from 'react'
import { useParams } from 'react-router-dom'
import ImageGrid from '../UI/ImageGrid';

function BlogPage() {
    const blogId = useParams();
    const { id } = blogId;
    const searchBlogById = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/blog-post/${id}/`);
        const data = await response.json();
        console.log(data);
    }
    return (
        <div>
            <ImageGrid images={["../../waterfall.webp", "../../waterfall.webp", "../../waterfall.webp", "../../waterfall.webp"]} />
            <div>hello</div>
        </div>
    )
}

export default BlogPage