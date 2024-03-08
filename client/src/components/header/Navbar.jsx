import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const aboutUs = document.querySelector("#aboutUs");
    const scrollHandlerAboutUs = () => {
        aboutUs.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };
    const navigate = useNavigate();
    const handleNavigateToTours = () => {
        navigate('/tours');
        setIsMenuOpen(false);
    }
    const handleNavigateToHome = () => {
        navigate('/');
        setIsMenuOpen(false);
    }
    const handleNavigateToBlogs = () => {
        navigate('/blogs');
        setIsMenuOpen(false);
    }
    const clickHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
            <div className='nav-container'>
                <div className='text-lg md:text-2xl ml-4 md:ml-14 font-bold'>Travel<span className='text-blue-500'>Tour</span></div>
                <div className='ml-auto md:mr-10 block lg:hidden'>
                    <button onClick={clickHandler}>
                        {isMenuOpen ? <ClearIcon /> : <MenuIcon />}
                    </button>
                </div>
                <div className='hidden lg:block w-1/2 md:w-[25%] px-6 justify-between py-6 ml-auto'>
                    <button onClick={handleNavigateToHome}>Home</button>
                    <button onClick={handleNavigateToTours}>TourList</button>
                    <button onClick={handleNavigateToBlogs}>Blogs</button>
                    <button onClick={scrollHandlerAboutUs}>About Us</button>
                </div>
            </div>
            <div>
                <div className={`${isMenuOpen ? 'block lg:hidden' : 'hidden'}` + " " + "flex flex-col justify-center gap-4 menuButton fixed w-full shadow-gray-700 shadow-lg bg-white"}>
                    <button onClick={handleNavigateToHome}>Home</button>
                    <button onClick={handleNavigateToTours}>TourList</button>
                    <button onClick={handleNavigateToBlogs}>Blogs</button>
                    <button onClick={scrollHandlerAboutUs}>About Us</button>
                </div>
            </div>
        </>
    )
}

export default Navbar