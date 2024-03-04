import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
function Navbar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const clickHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <>
        <div className='nav-container'>
            <div className='text-lg md:text-2xl ml-4 md:ml-14 font-bold'>Travel<span className='text-blue-500'>Tour</span></div>
            <div className='ml-auto md:mr-10 block lg:hidden'>
                <button onClick={clickHandler}>
                {isMenuOpen ?  <ClearIcon/> : <MenuIcon/> }
                </button>
            </div>
            <div className='hidden lg:block w-1/2 md:w-[20%] px-6 justify-between py-6 ml-auto'>
                <button>Home</button>
                <button>Blogs</button>
                <button>About Us</button>
            </div>
        </div>
        <div>
            <div className={`${isMenuOpen ? 'block lg:hidden' : 'hidden'}` + " " + "flex flex-col justify-center gap-4 menuButton fixed w-full bg-white"}>
                <button>Home</button>
                <button>Blogs</button>
                <button>About Us</button>
            </div>
        </div>
    </>
  )
}

export default Navbar