import React from 'react'

const Partners = () => {
    return (
        <div className='w-full p-10 flex flex-col justify-center items-center'>
            <h1 className='text-[6vw] md:text-[2vw] font-[spaceBold] '>
                Our Trusted <span>Partners</span>
            </h1>
            <p className='px-5 md:w-[40%] text-center mt-2 text-gray-500 font-[spaceRegualar]'>We’re proud to collaborate with leading organizations and government bodies who support our mission. Their trust and partnership help us deliver reliable and impactful services to our users.</p>

            <div className='w-full flex justify-center items-center mt-10 flex-col gap-10 md:gap-20 md:flex-row'>
                {
                    ["/part1.png", "/part2.png", "/part3.png", "/part4.png","/part5.png"].map((item, index) => (
                        <img className='w-[50%] md:w-[15%] mt-5' src={item} alt="" />
                    ))
                }
            </div>
        </div>
    )
}

export default Partners
