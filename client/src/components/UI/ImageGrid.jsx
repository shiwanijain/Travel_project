import React from 'react'

function ImageGrid({ images }) {
    return (
        <div>
            <div className="container mx-auto px-5 py-2">
                <div className="-m-1 flex flex-wrap justify-center md:-m-2">
                    <div className="flex w-[90%] md:w-[70%] flex-wrap">
                        {
                            images.map((image, index) => (
                                index === 0 ? <div key={index} className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src={image} />
                                </div> :
                                    <div key={index} className="w-1/2 p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block h-full w-full rounded-lg object-cover object-center"
                                            src={image} />
                                    </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGrid