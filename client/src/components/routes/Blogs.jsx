import React from 'react'
import BlogCard from '../UI/BlogCard'
import SearchIcon from '@mui/icons-material/Search';

const blogCardData = [
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

function Blogs() {
  return (
    <div>
      <div className='flex justify-center gap-4'>
        <input type="text" placeholder='search city to travel' name="" id="" className='border-2 placeholder:text-center p-2' />
        <SearchIcon fontSize='large' />
      </div>
      <div className='flex flex-col md:flex-row gap-6 w-[80%] mx-auto justify-center my-10'>
        {blogCardData.map((data, index) => (
          <BlogCard key={index} title={data.place.name} date={data.date} duration={data.duration} cost={data.cost} id={data.id} />
        ))}
      </div>
    </div>
  )
}

export default Blogs