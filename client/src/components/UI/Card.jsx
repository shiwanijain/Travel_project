import React from 'react'
import "./Card.css"

function Card(props) {
    return (
        <div className="mobileCard">
            <img src="../../../public/waterfall.webp" alt="" className='w-60 lg:w-96 rounded-xl' />
            <div className='relative z-10 -top-16 text-white text-4xl p-4 font-bold'>{props.continent}</div>
        </div>
    )
}

export default Card