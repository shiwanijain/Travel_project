import React, { useState, useEffect } from 'react'

const data = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', 'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3', 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630'];

function CardCarousel() {
    const [imageIndex, setImageIndex] = useState(0);
    const getNextImage = () => {
        if (imageIndex != data.length - 1)
            setImageIndex(imageIndex + 1);
        else
            setImageIndex(0);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            getNextImage();
        }, 3000); // Change image every 3 seconds

        return () => clearTimeout(timeout); // Clear timeout on component unmount
    }, [imageIndex]);


    return (
        <div className='flex'>
            <img style={{ width: '500px', height: '400px' }} src={data[imageIndex]} alt='wallpaper'></img>
        </div>
    )
}

export default CardCarousel;