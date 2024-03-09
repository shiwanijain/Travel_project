import React, { useEffect, useState, useRef } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import BlogCard from '../UI/BlogCard';

function Blogs() {
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
                <BlogCard
                    key={data.id}
                    place={data.title}
                    description={data.summary}
                    author={data.faq}
                    duration={data.number_of_days}
                    contact={data.contact_details}
                />
            ))}
            <BlogCard place={{ name: "Paris", picture: "../../../waterfall.webp" }} description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, " author="John Doe" />
        </div>
    )
}

export default Blogs