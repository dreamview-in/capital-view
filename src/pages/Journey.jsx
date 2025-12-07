import React from 'react'

const Journey = () => {
     const data = [
        {
            title: "1800+ Active Clients",
            desc: "Egestas elit dui scelerisque ut eu purus aliquam vitae.",
        },
        {
            title: "10000+",
            desc: "MSMEs Guided Personally by Our Team",
        },
        {
            title: "50+",
            desc: "Banks & NBFCs Compared for Each Client’s Goal",
        },
    ]
  return (
    <div className='w-full md:h-screen p-8 md:px-30 flex flex-col items-center justify-center'>
       <h1 className='text-[6vw] md:text-[2vw] font-[spaceBold] '>
                Our Journey in <span>Numbers</span>
            </h1>
            <p className='px-5 md:w-[50%] text-center mt-2 text-gray-500 font-[spaceRegualar]'>CapitalView helps individuals and businesses access trusted loans and government-backed funding with ease. We simplify the process, offering quick tools and expert support to fuel your financial growth.</p>

            <div className='flex flex-col w-full items-center mt-20 justify-center gap-10 md:flex-row '>
                {
                    data.map((item, index) => {
                        return (
                             <div className='flex-col flex items-center justify-center md:min-h-[20vw] rounded-xl bg-[#6BD1D3] w-full p-8 gap-5'>
                    <div className='w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] rounded-full bg-white'></div>
                     <h1 className='text-2xl font-[spaceRegualar] font-bold mt-4'>{item.title}</h1>
                     <p className='text-center mt-2 text-[#21272A] text-xl font-[spaceRegualar]'>{item.desc} </p>
                </div>
                        )
                    })
                }
              
            </div>
    </div>
  )
}

export default Journey
