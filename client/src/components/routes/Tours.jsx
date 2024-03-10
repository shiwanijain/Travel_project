import React, { useEffect, useRef, useState } from 'react'
import TourCard from '../UI/TourCard'
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

  const [tourData, setTourData] = useState([]);
  const [filteredData, setFilteredData] = useState(tourData);
  const getAllBlogs = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/allTours/');
    const data = await response.json();
    const updatedData = data.map(item => {
      const dateStr = item.created_at;
      const date = new Date(dateStr);
      const humanReadableDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      return { ...item, humanReadableDate };
    });
    setTourData(updatedData);
    setFilteredData(updatedData);
    console.log(updatedData);
  }
  useEffect(() => {
    getAllBlogs();
  }, []);

  async function searchTours() {
    const currentInput = inputRef.current.value;
    console.log(currentInput);
    const filteredData = tourData.filter(data => data.title.toLowerCase() === currentInput.toLowerCase());
    console.log(filteredData);
    setFilteredData(filteredData);
  }
  return (
    <div>
      <div className='flex justify-center gap-4'>
        <input type="text" placeholder='search city to travel' name="" id="" className='border-2 placeholder:text-center p-2' ref={inputRef} />
        <button onClick={searchTours}><SearchIcon fontSize='large' /></button>
      </div>
      <div className='flex flex-col md:flex-row gap-6 w-[80%] mx-auto justify-center my-10'>
        {tourData.map((data, index) => (
          <TourCard key={index} title={data.title} date={data.humanReadableDate} duration={data.number_of_days} cost={data.starting_price} id={data.id} />
        ))}
      </div>
    </div>
  )
}

export default Tours