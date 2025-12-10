import React from 'react'

const Features = () => {
    const data = [
        {
            id: 1,
            img: "/img-1.png",
            number: "100+",
            title: "CITIES"
        },
        {
            id: 2,
            img: "/img-2.png",
            number: "3200+",
            title: "connecters "
        },
        {
            id: 3,
            img: "/img-3.png",
            number: "50+",
            title: "employees"
        },
        {
            id: 4,
            img: "/img-4.png",
            number: "700+",
            title: "Financial Advisors"
        },
        {
            id: 5,
            img: "/img-5.png",
            number: "50+",
            title: "Lending Partners"
        },

    ]
    return (
        <div className='w-full py-15 px-20 flex flex-col md:flex-row  items-center justify-center gap-10 bg-[#F1FCFE]'>
            {
                data.map((item, index) => {
                    return (
                        <div key={item.id} className='bg-[#8FE3E5] p-5 rounded-xl flex flex-col justify-center gap-3'>
                            <img className='w-[18%] md:w-[20%]' src={item.img} alt="" />
                            <div>
                                <h1 className='text-[15vw] md:text-[3.3vw] font-[spaceRegualar]'>{item.number}</h1>
                                <p className='text-xl uppercase font-[spaceRegualar]'>{item.title}</p>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Features
