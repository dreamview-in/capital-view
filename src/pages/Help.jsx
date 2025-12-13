import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";


const Help = () => {
    const data = [
        {
            img: "/find2.png",
            name: "Professional Loan",
            bg: "white",
            large: false,
        },
        {
            img: "/find1.png",
            name: "Loan Against Property",
            bg: "white",
            large: false,
        },
        {
            img: "/find3.png",
            name: "Personal Loan",
            bg: "white",
            large: false,
        },
        {
            img: "/loan1.jpg",
            name: "Business Loan",
            bg: "white",
            large: false,
        },
        {
            img: "/loan2.jpg",
            name: "Home Loan",
            bg: "white",
            large: false,
        },
    ];

    return (
        <div className="relative w-full md:h-screen p-6 overflow-hidden flex flex-col items-center justify-center">

            {/* Background SVGs (same as your first component) */}
            <div className="hidden absolute md:block bottom-0 z-[-2]">
                <svg width="1920" height="601" viewBox="0 0 1920 601" fill="none">
                    <path
                        d="M-42 47.3687C58 11.0354 384.7 23.8687 891.5 365.869C1398.3 707.869 1830 538.369 1982.5 410.869"
                        stroke="#6BD1D3"
                        strokeOpacity="0.7"
                        strokeWidth="67"
                    />
                </svg>
            </div>

            <div className="hidden absolute md:block bottom-0 z-[-1]">
                <svg width="1920" height="822" viewBox="0 0 1920 822" fill="none">
                    <path
                        d="M-173 807.961C-118.5 681.628 281.1 398.761 747.5 391.961C1330.5 383.461 1588 317.961 2027.5 27.9614"
                        stroke="#E1F6F6"
                        strokeWidth="67"
                    />
                </svg>
            </div>

            <h1 className="text-[5vw] md:text-[2vw] font-[spaceRegualar] font-bold uppercase mb-12">
                Let us help you <span className="text-[#6BD1D3]">FIND</span> a Loan
            </h1>

            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                centeredSlides={true}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
                className="w-full pb-14! realtive"
            >
                

                {data.map((item, index) => (
                    <SwiperSlide key={index} className="flex  justify-center">
                        <Link to="/loan" state={{ loan: item }}
                            className={`shadow-xl cursor-pointer shadow-gray-400 overflow-hidden
                ${item.large
                                    ? "w-[75vw] h-[85vw] md:w-[28vw] md:h-[28vw]"
                                    : "w-[70vw] h-[80vw] md:w-[25vw] md:h-[25vw]"
                                }`}
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className={`w-full object-cover
                  ${item.large
                                        ? "h-[60vw] md:h-[23vw]"
                                        : "h-[60vw] md:h-[20vw]"
                                    }`}
                            />

                            <div
                                className="w-full h-[20vw] md:h-[5vw] flex items-center justify-center
                           text-2xl font-[spaceRegualar] font-bold"
                                style={{ backgroundColor: item.bg }}
                            >
                                {item.name}
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Help;
