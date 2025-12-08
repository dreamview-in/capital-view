import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between px-8 h-[12vh] bg-[#14263E] fixed z-99'>
      <div className='font-[spaceBold] text-[#6BD1D3] text-4xl'>CAPITALVIEW</div>
      <div className='flex gap-5'>
        {['Home','Loan', 'About',].map((item, i) => (
          <div key={i} className='text-white font-[spaceRegualar] cursor-pointer hover:text-[#6BD1D3] duration-300'>{item}</div>
        ))}
      </div>
       <div>
      <button className={`bg-[#75DCE3] text-[1rem] text-black font-[spaceBold] px-15 py-3 rounded-md hover:bg-[#5ac1c7] transition-all uppercase duration-300 `}>
                    Contact Us
                </button>
    </div>
    </div>
  )
}

export default Navbar
