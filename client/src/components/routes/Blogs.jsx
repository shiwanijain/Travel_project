import React from 'react'
import BlogCard from '../UI/BlogCard'
import SearchIcon from '@mui/icons-material/Search';

const blogCardData = [
  {
    place: { name: "Paris", picture: "../../../waterfall.webp" },
    description: "Paris is a great place to visit.",
    author: "John Doe"
  },
  {
    place: { name: "London", picture: "../../../london.webp" },
    description: "London is a city with a rich history.",
    author: "Jane Doe"
  },
  {
    place: { name: "New York", picture: "../../../newyork.webp" },
    description: "New York is an exciting city with lots to do.",
    author: "Jim Doe"
  }
];

function Blogs() {
  return (
    <div>
      <div className='flex justify-center gap-4'>
        <input type="text" placeholder='search city to travel' name="" id="" className='border-2 placeholder:text-center p-2' />
        <SearchIcon fontSize='large' />
      </div>
      {blogCardData.map((data, index) => (
        <BlogCard
          key={index}
          place={data.place}
          description={data.description}
          author={data.author}
        />
      ))}
      <BlogCard place={{ name: "Paris", picture: "../../../waterfall.webp" }} description="This is a great place to visit." author="John Doe" />
    </div>
  )
}

export default Blogs