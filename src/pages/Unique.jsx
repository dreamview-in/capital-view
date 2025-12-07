import React from 'react'

const Unique = () => {
    const data = [
        {
            img: "/unq1.png",
            title: "Dedicated Specialists",
            desc: "Our team comes with several years of industry experience, and comprise of a highly motivated set of specialists & industry experts.",
            width: "60%"
        },
        {
            img: "/unq2.png",
            title: "Wide Choice",
            desc: "We have partnerships with large banks, NBFCs and fintech lenders who offer a wide choice of products on our platform.",
            width: "50%"
        },
        {
            img: "/unq3.png",
            title: "Safe & Secure",
            desc: "Your data is completely safe with us.",
            width: "80%"
        },
    ]
    return (
        <div className='w-full p-6 flex flex-col items-center justify-center bg-white mt-20 mb-20'>
            <h1 className='text-[5vw] md:text-[2vw] font-[spaceRegualar] font-bold '>
                What Makes <span>CAPITALVIEW</span> Unique
            </h1>

            <div className='w-full mt-15 flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center px-3 '>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='p-8 flex items-center justify-center flex-col gap-4'>
                                <img
                                    className={` w-[${item.width}] ${item.width === "80%" ? "w-4/5" : item.width === "60%" ? "w-3/5" : "w-2/5"}`}
                                    src={item.img}
                                    alt=""
                                />
                                <h1 className='text-2xl font-[spaceRegualar] font-bold mt-4'>{item.title}</h1>
                                <p className='text-center mt-2 text-gray-500 font-[spaceRegualar]'>{item.desc}</p>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Unique
