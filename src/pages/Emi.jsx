import React from 'react'

const Emi = () => {
  return (
    <div className='w-full md:h-[90vh
    
    ] p-8 flex flex-col items-center justify-center bg-[#F1FCFE]'>
        <h1 className='text-[6vw] md:text-[2vw] font-[spaceBold] '>
                EMI Calculator 
            </h1>
            <p className='px-5 md:w-[40%] text-center mt-2 text-gray-500 font-[spaceRegualar]'>Connecting individuals and businesses to verified and impactful government support programs.</p>
      <div className='w-full p-6 flex flex-col md:flex-row-reverse items-center justify-center gap-10 mt-20 md:gap-0'>
        <div className='w-full h-full flex items-center justify-center'>
        <img className='md:w-[60%]' src="/vector.png" alt="" />
        </div>
        <div className='w-full flex flex-col gap-5 items-center justify-center md:items-start'>
            <h1 className='font-[spaceRegualar] text-xl'>Check EMI Easily in Seconds</h1>
            <h1 className='font-[spaceRegualar] font-bold text-[6vw] md:text-[3vw] uppercase text-center md:text-left mt-5'>Plan Your Repayments <br /> Easily in Seconds</h1>
            <p className='text-center text-[#141212] font-[regular-inter] md:text-left md:text-[1.2vw] capitalize'>Quickly calculate your monthly EMI by entering the loan amount, interest rate, and tenure. Plan your repayments with clarity and confidence.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Emi
