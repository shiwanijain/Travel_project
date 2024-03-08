import React from 'react'

function ImageGrid({ images }) {
    return (
        <div>
            <div class="container mx-auto px-5 py-2 lg:px-32">
                <div class="-m-1 flex flex-wrap  justify-center md:-m-2">
                    <div class="flex w-1/2 flex-wrap">
                        {
                            images.map((image, index) => (
                                index === 0 ? <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src={image} />
                                </div> :
                                    <div class="w-1/2 p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            class="block h-full w-full rounded-lg object-cover object-center"
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