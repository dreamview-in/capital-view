import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  const data = [
    {
      h1: "Business Loan – MSME Owner",
      img: "/icon1.jpg",
      title: "Harendra Sharma,",
      sub: "Manufacturing Entrepreneur",
      desc: "CapitalVenue understood our working capital needs and guided us through the entire business loan process with clarity and transparency. The turnaround time was impressive, and the structured repayment options helped us scale without pressure.",
    },
    {
      h1: "Home Loan – Salaried Customer",
      img: "/icon2.jpg",
      title: "Saurabh Jain ",
      sub: "",
      desc: "From eligibility assessment to final disbursement, the home loan journey with CapitalVenue was smooth and well-coordinated. Their team explained every step clearly, making the process stress-free for first-time home buyers like us.",
    },
    {
      h1: "Professional Loan – Doctor / CA / Consultant",
      img: "/icon3.png",
      title: "Dr. Anil Rastogi ",
      sub: "",
      desc: "As a medical professional, time is critical. CapitalVenue offered a customized professional loan solution that matched my cash flow needs. The process was efficient, and documentation was minimal.",
    },
    {
      h1: "Loan Against Property (LAP) – Business Expansion",
      img: "/icon4.jpg",
      title: "Puran Mal",
      sub: "Business Owner",
      desc: "We opted for a loan against property to expand our operations. CapitalVenue helped us leverage our asset effectively with competitive terms and clear communication throughout the process.",
    },
    {
      h1: "Personal Loan – Salaried Individual",
      img: "/icon5.jpg",
      title: "Priya Malhotra",
      sub: "",
      desc: "CapitalVenue provided quick assistance for my personal loan requirement without unnecessary delays. The team was responsive, and the repayment structure was clearly explained upfront.",
    },
  ];

  return (
    <div className="w-full md:h-screen p-8 md:px-30 flex flex-col items-center justify-center">
      <h1 className="text-[6vw] md:text-[2vw] font-[spaceBold]">
        Customer <span>Testimonials</span>
      </h1>

      <p className="px-5 md:w-[50%] text-center mt-2 text-gray-500 font-[spaceRegualar]">
        CaptialVenue helps individuals and businesses access trusted loans and
        government-backed funding with ease.
      </p>

     <Swiper
  modules={[Pagination, Autoplay]}
  pagination={{
    clickable: true,
  }}
  autoplay={{ delay: 4000 }}
  spaceBetween={30}
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="w-full mt-20 pb-16"
>

        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-between rounded-xl bg-white border w-full p-8 gap-5 md:min-h-[21vw]">
              <div>
                <svg width="123" height="25" viewBox="0 0 123 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3899 2.5549C11.6512 1.75072 12.7888 1.75072 13.0501 2.5549L14.7676 7.84068C14.8844 8.20032 15.2196 8.44381 15.5977 8.44381H21.1555C22.0011 8.44381 22.3526 9.52582 21.6686 10.0228L17.1722 13.2896C16.8663 13.5119 16.7383 13.9059 16.8551 14.2655L18.5726 19.5513C18.8339 20.3555 17.9135 21.0242 17.2294 20.5272L12.733 17.2604C12.4271 17.0381 12.0129 17.0381 11.7069 17.2604L7.21059 20.5272C6.52652 21.0242 5.60611 20.3555 5.8674 19.5513L7.58485 14.2655C7.70171 13.9059 7.5737 13.5119 7.26777 13.2896L2.77141 10.0228C2.08734 9.52582 2.43891 8.44381 3.28447 8.44381H8.84227C9.22041 8.44381 9.55555 8.20032 9.6724 7.84068L11.3899 2.5549Z" fill="#F5D949" />
                  <path d="M35.8313 2.5549C36.0926 1.75072 37.2302 1.75072 37.4915 2.5549L39.209 7.84068C39.3258 8.20032 39.661 8.44381 40.0391 8.44381H45.5969C46.4425 8.44381 46.7941 9.52582 46.11 10.0228L41.6136 13.2896C41.3077 13.5119 41.1797 13.9059 41.2965 14.2655L43.014 19.5513C43.2753 20.3555 42.3549 21.0242 41.6708 20.5272L37.1745 17.2604C36.8685 17.0381 36.4543 17.0381 36.1483 17.2604L31.652 20.5272C30.9679 21.0242 30.0475 20.3555 30.3088 19.5513L32.0263 14.2655C32.1431 13.9059 32.0151 13.5119 31.7092 13.2896L27.2128 10.0228C26.5287 9.52582 26.8803 8.44381 27.7259 8.44381H33.2837C33.6618 8.44381 33.997 8.20032 34.1138 7.84068L35.8313 2.5549Z" fill="#F5D949" />
                  <path d="M60.2688 2.5549C60.5301 1.75072 61.6677 1.75072 61.929 2.5549L63.6465 7.84068C63.7633 8.20032 64.0985 8.44381 64.4766 8.44381H70.0344C70.88 8.44381 71.2316 9.52582 70.5475 10.0228L66.0511 13.2896C65.7452 13.5119 65.6172 13.9059 65.734 14.2655L67.4515 19.5513C67.7128 20.3555 66.7924 21.0242 66.1083 20.5272L61.612 17.2604C61.306 17.0381 60.8918 17.0381 60.5858 17.2604L56.0895 20.5272C55.4054 21.0242 54.485 20.3555 54.7463 19.5513L56.4638 14.2655C56.5806 13.9059 56.4526 13.5119 56.1467 13.2896L51.6503 10.0228C50.9662 9.52582 51.3178 8.44381 52.1634 8.44381H57.7212C58.0993 8.44381 58.4345 8.20032 58.5513 7.84068L60.2688 2.5549Z" fill="#F5D949" />
                  <path d="M84.7102 2.5549C84.9715 1.75072 86.1092 1.75072 86.3704 2.5549L88.0879 7.84068C88.2048 8.20032 88.5399 8.44381 88.918 8.44381H94.4758C95.3214 8.44381 95.673 9.52582 94.9889 10.0228L90.4925 13.2896C90.1866 13.5119 90.0586 13.9059 90.1754 14.2655L91.8929 19.5513C92.1542 20.3555 91.2338 21.0242 90.5497 20.5272L86.0534 17.2604C85.7474 17.0381 85.3332 17.0381 85.0273 17.2604L80.5309 20.5272C79.8468 21.0242 78.9264 20.3555 79.1877 19.5513L80.9052 14.2655C81.022 13.9059 80.894 13.5119 80.5881 13.2896L76.0917 10.0228C75.4077 9.52582 75.7592 8.44381 76.6048 8.44381H82.1626C82.5407 8.44381 82.8759 8.20032 82.9927 7.84068L84.7102 2.5549Z" fill="#F5D949" />
                  <path d="M109.152 2.5549C109.413 1.75072 110.551 1.75072 110.812 2.5549L112.529 7.84068C112.646 8.20032 112.981 8.44381 113.359 8.44381H118.917C119.763 8.44381 120.114 9.52582 119.43 10.0228L114.934 13.2896C114.628 13.5119 114.5 13.9059 114.617 14.2655L116.334 19.5513C116.596 20.3555 115.675 21.0242 114.991 20.5272L110.495 17.2604C110.189 17.0381 109.775 17.0381 109.469 17.2604L104.972 20.5272C104.288 21.0242 103.368 20.3555 103.629 19.5513L105.347 14.2655C105.463 13.9059 105.335 13.5119 105.029 13.2896L100.533 10.0228C99.8491 9.52582 100.201 8.44381 101.046 8.44381H106.604C106.982 8.44381 107.317 8.20032 107.434 7.84068L109.152 2.5549Z" fill="#F5D949" />
                </svg>

                <h1 className="font-[spaceBold] text-md">{item.h1}</h1>

                <p className="text-left mt-2 text-[#21272A] text-xl md:text-[.9vw] font-[spaceRegualar]">
                  {item.desc}
                </p>
              </div>

              <div className="w-full flex gap-5 items-center">
                <div className="h-[10vw] w-[10vw] md:w-[4vw] md:h-[4vw] bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h1 className="capitalize text-xl font-[spaceBold]">
                    {item.title}
                  </h1>
                  <h1 className="capitalize text-sm text-gray-500 font-[spaceRegualar]">
                    {item.sub}
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default About;
