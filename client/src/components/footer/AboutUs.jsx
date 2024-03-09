import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const AboutUs = () => {
    return (
        <div id='aboutUs' className='flex flex-col w-screen mt-24 bg-black text-white items-center gap-6'>
            <div className='text-4xl lg:text-5xl pt-10'>About Us</div>
            <div className="social-media flex gap-6">
                <a href="https://www.facebook.com"><FacebookIcon fontSize='large' /></a>
                <a href="https://www.twitter.com"><XIcon fontSize='large' /></a>
                <a href="https://www.instagram.com"><InstagramIcon fontSize='large' /></a>
            </div>
            <div className="logo">
                <img src="/path/to/logo.png" alt="Logo" />
            </div>
            <div className="text-center w-[80%] md:w-[50%] gap-4 pb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, saepe eligendi ab repellat mollitia consequuntur dolores delectus earum dolorum voluptatibus suscipit id doloremque iure cum, debitis itaque. Sunt eos minus repellat numquam. Fuga, ipsa. Libero amet quod reprehenderit unde corporis impedit nemo odit debitis, deserunt doloremque sequi. Id, facere magni asperiores numquam, ea magnam quidem velit ad saepe, ipsum corrupti?
            </div>
        </div>
    );
};

export default AboutUs;