import React from 'react'

const Btn = ({value,font}) => {
  return (
    <div>
      <button className={`bg-[#75DCE3] cursor-pointer text-[1rem] text-black font-[${font}] px-12 py-3 rounded-md hover:bg-[#5ac1c7] transition-all uppercase duration-300 shadow-[6px_6px_0px_#000] `}>
                    {value}
                </button>
    </div>
  )
}

export default Btn
