import React, { useEffect, useState, useRef } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import BlogCard from '../UI/BlogCard';

function Blogs() {
    const [cardData, setCardData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const inputRef = useRef();

    async function getAllTours() {
        const response = await fetch('http://127.0.0.1:8000/api/all-blog-posts/');
        const data = await response.json();
        const updatedData = data.map(item => {
            const dateStr = item.created_at;
            const date = new Date(dateStr);
            const humanReadableDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
            return { ...item, humanReadableDate };
        });
        setCardData(updatedData);
        setFilteredData(updatedData);
        console.log(updatedData);
    }
    useEffect(() => {
        getAllTours();
    }, [])

    async function searchBlogs() {
        const currentInput = inputRef.current.value;
        console.log(currentInput);
        const filteredData = cardData.filter(data => data.title.toLowerCase().includes(currentInput.toLowerCase()));
        console.log(filteredData);
        setFilteredData(filteredData);
    }

    function searchOnKeyPress(e) {
        if (e.key === 'Enter') {
            searchBlogs();
        }
    }

    return (
        <div>
            <div className='flex justify-center gap-4'>
                <input ref={inputRef} onKeyDown={searchOnKeyPress} type="text" placeholder='search city to travel' className='border-2 placeholder:text-center p-2' />
                <button onClick={searchBlogs}><SearchIcon fontSize='large' /></button>
            </div>
            {filteredData.map((data, index) => (
                <BlogCard
                    key={index}
                    place={{ name: data.title, picture: data.image }}
                    description={data.content}
                    author={data.author}
                    contact={data.contact_details}
                    date={data.humanReadableDate}
                />
            ))}
            <BlogCard place={{ name: "Paris", picture: "../../../waterfall.webp" }} description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, " author="John Doe" />
        </div>
    )
}

export default Blogs