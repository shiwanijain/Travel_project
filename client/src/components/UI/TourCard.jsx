import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom';

export default function TourCard(props) {
    const navigate = useNavigate();
    const handleNavigateToBlogPage = () => {
        navigate(`/blogs/${props.id}`);
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <button onClick={handleNavigateToBlogPage} className='hover:scale-110 transition-transform duration-500 overflow-y-hidden'>
                <CardMedia
                    component="img"
                    height="100"
                    image="../../../waterfall.webp"
                    alt="destination"
                />
            </button>
            <div className='z-10 bg-white'>
                <CardHeader
                    title={props.title}
                    subheader={props.date}
                />
            </div>
            <div className="flex gap-2 p-2">
                <AccessTimeIcon />
                <div className='font-bold'>
                    {props.duration}
                </div>
            </div>
            <div className='flex p-2'>
                <div className=' my-auto text-lg'>From</div>
                <div className='text-blue-400 font-bold text-xl md:text-2xl my-auto ml-4'>{props.cost}</div>
            </div>
        </Card>
    );
}
