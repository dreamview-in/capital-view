import React from 'react'

const Help = () => {
     const data = [
         {
             img: "/find2.png",
             title: "Professional Loan",
             bg: "white"
            },
            {
                img: "/find1.png",
                title: "Loan Against Property",
                bg: "#6BD1D3"
            },
        {
            img: "/find3.png",
            title: "Personal Loan",
            bg: "white"
        },
    ]
    return (
        <div className='relative w-full md:h-screen p-6 overflow-hidden flex flex-col items-center justify-center'>
            <div className='hidden absolute md:block bottom-0 z-[-2]'>
                <svg width="1920" height="601" viewBox="0 0 1920 601" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-42 47.3687C58 11.0354 384.7 23.8687 891.5 365.869C1398.3 707.869 1830 538.369 1982.5 410.869" stroke="#6BD1D3" stroke-opacity="0.7" stroke-width="67" />
                </svg>
            </div>
            <div className='hidden absolute md:block bottom-0 z-[-1]'>
                <svg width="1920" height="822" viewBox="0 0 1920 822" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-173 807.961C-118.5 681.628 281.1 398.761 747.5 391.961C1330.5 383.461 1588 317.961 2027.5 27.9614" stroke="#E1F6F6" stroke-width="67" />
                </svg>
            </div>
            <h1 className='text-[5vw] md:text-[2vw] font-[spaceRegualar] font-bold uppercase'>
                Let us help you <span>FIND</span> a Loan
            </h1>
            <div className='w-full mt-15 flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center px-3'>
                {data.map((item, index) => (
                    <div key={index} className={`w-[70vw] h-[80vw] shadow-xl shadow-gray-400 overflow-hidden ${index === 1 ? "md:w-[28vw] md:h-[28vw]" : "md:w-[25vw] md:h-[25vw]"}`}>
                        <img className={`w-full object-cover ${index === 1 ? "md:h-[23vw] h-[60vw]" : "md:h-[20vw] h-[60vw]"}`} src={item.img} alt={item.title} />
                        <div className='w-full md:h-[5vw] h-[20vw] flex text-2xl font-[spaceRegualar] font-bold items-center justify-center' style={{ backgroundColor: item.bg }}>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Help
