import React from 'react'

const Loan = () => {
     const data = [
        {
            img: "/loan1.jpg",
            title: "Business loan",
            bg: "white"
        },
        {
            img: "/loan2.jpg",
            title: "Home loan",
            bg: "white"
        },
    ]
  return (
     <div className='relative w-full  p-6 overflow-hidden flex flex-col items-center justify-center'>
            <div className='w-full mt-15 flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center px-3'>
                {data.map((item, index) => (
                    <div key={index} className={`w-[70vw] h-[80vw] md:w-[25vw] md:h-[25vw] shadow-xl shadow-gray-400 overflow-hidden `}>
                        <img className={`w-full object-cover md:h-[20vw] h-[60vw] `} src={item.img} alt={item.title} />
                        <div className='w-full md:h-[5vw] h-[20vw] flex text-2xl font-[spaceRegualar] font-bold items-center justify-center' style={{ backgroundColor: item.bg }}>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Loan
