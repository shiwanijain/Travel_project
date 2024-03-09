import { useState } from 'react';
import './BlogCard.css';

const BlogCard = ({ place, description, author, duration, contact }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [displayDescription, setDisplayDescription] = useState(description.split(' ').slice(0, 50).join(' '));
    const isLongDescription = description.split(' ').length > 50;

    const handleExpand = () => {
        if (isExpanded) {
            setDisplayDescription(description.split(' ').slice(0, 50).join(' '));
        } else {
            setDisplayDescription(description);
        }
        setIsExpanded(!isExpanded);
    }
    return (
        <div className="blog-card">
            <img src={place.picture} alt={place.name} />
            <div className="card-body">
                <h3 className='destination'>{place.name}</h3>
                <p>{displayDescription}{isLongDescription}</p>
                {isLongDescription && <button onClick={handleExpand}>{isExpanded ? 'Show Less' : 'Learn More'}</button>}
                <p className='author'>Author: {author}</p>
                <p className='upload-date'>duration: {duration}days</p>
                <p className='contact'>contact: {contact}</p>
            </div>
        </div>
    );
};

export default BlogCard;