import React, { useEffect, useRef, useState } from 'react'
import BlogCard from '../UI/TourCard'
import SearchIcon from '@mui/icons-material/Search';

const tourCardData = [
  {
    place: { name: "Paris", picture: "../../../waterfall.webp" },
    description: "Paris is a great place to visit.",
    author: "John Doe",
    date: "2021-09-01",
    duration: "7 days",
    cost: "$1000",
    id: 1
  },
  {
    place: { name: "London", picture: "../../../london.webp" },
    description: "London is a city with a rich history.",
    author: "Jane Doe",
    date: "2021-09-01",
    duration: "3 days",
    cost: "$500",
    id: 2
  },
  {
    place: { name: "New York", picture: "../../../newyork.webp" },
    description: "New York is an exciting city with lots to do.",
    author: "Jim Doe",
    date: "2021-09-01",
    duration: "5 days",
    cost: "$800",
    id: 3
  }
];

function Tours() {
  const inputRef = useRef();
  useEffect(() => {
    getAllBlogs();
  }, []);
  const [blogData, setBlogData] = useState([]);
  const [filteredData, setFilteredData] = useState(blogData);
  const getAllBlogs = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/all-blog-posts/');
    const data = await response.json();
    setBlogData(data);
    setFilteredData(data);
  }
  console.log(filteredData);
  const handleSearch = () => {
    const searchValue = inputRef.current.value;
    const filteredData = blogData.filter(blog => blog.place.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredData(filteredData);
  }
  return (
    <div>
      <div className='flex justify-center gap-4'>
        <input type="text" placeholder='search city to travel' name="" id="" className='border-2 placeholder:text-center p-2' ref={inputRef} />
        <button onClick={handleSearch}><SearchIcon fontSize='large' /></button>
      </div>
      <div className='flex flex-col md:flex-row gap-6 w-[80%] mx-auto justify-center my-10'>
        {tourCardData.map((data, index) => (
          <BlogCard key={index} title={data.place.name} date={data.date} duration={data.duration} cost={data.cost} id={data.id} />
        ))}
      </div>
    </div>
  )
}

export default Tours