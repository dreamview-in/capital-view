import React from 'react'

const Partners = () => {
  const logos = [
    "/part1.png", "/part2.png", "/part3.png", "/part4.png",
    "/part5.png", "/part6.png", "/part7.png", "/part8.png",
    "/part9.png", "/part10.png", "/part11.png", "/part12.png",
    "/part13.png", "/part14.png", "/part15.png", "/part16.png",
  ];

  return (
    <div className='w-full p-10 flex flex-col justify-center items-center'>
      
      <h1 className='text-[6vw] md:text-[2vw] font-[spaceBold]'>
        Our Trusted <span>Partners</span>
      </h1>

      <p className='px-5 md:w-[40%] text-center mt-2 text-gray-500 font-[spaceRegualar]'>
        We’re proud to collaborate with leading organizations and government bodies who support our mission.
      </p>

      {/* MOBILE GRID (hidden on desktop) */}
      <div className="w-full grid grid-cols-2 gap-10 mt-10 md:hidden">
        {logos.map((src, i) => (
          <div key={i} className="flex items-center justify-center">
            <img src={src} className="h-[60px] object-contain" alt="" />
          </div>
        ))}
      </div>

      {/* DESKTOP SCROLL (hidden on mobile) */}
      <div className="w-full overflow-hidden mt-10 hidden md:block">
        <div
          className="flex items-center gap-20 w-max
 animate-[scroll_20s_linear_infinite]"
          style={{ animationDuration: "40s" }}
        >
          {/* First batch */}
          {logos.map((src, i) => (
            <img key={i} src={src} className="h-20 object-contain" alt="" />
          ))}

          {/* Duplicate batch */}
          {logos.map((src, i) => (
            <img key={`dup-${i}`} src={src} className="h-20 object-contain" alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
