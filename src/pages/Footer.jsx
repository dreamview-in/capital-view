import React from 'react'
import Btn from '../components/Btn'
import { Link } from 'react-router-dom'
import { Link2Off } from 'lucide'

const Footer = () => {
    return (
        <div className='w-full md:h-[80vh] mt-20 bg-[#F1FCFE] flex flex-col items-center justify-end'>

            <div className='flex items-center flex-col w-full md:flex-row gap-10 justify-center p-10'>

                <div className='flex w-full flex-col md:flex-row gap-20 md:gapx-50 items-start justify-between'>

                    <div className='flex flex-col gap-5 p-3 w-full  items-center md:items-start'>

                        <div className='flex justify-center md:justify-start items-center w-full gap-4'>
                            <div className="font-[spaceBold] text-[#6BD1D3] flex gap-1 items-center text-2xl md:text-4xl">
                                <img className="w-8 h-8 md:w-10 md:h-10 object-contain" src="/logo.png" alt="" />
                                CapitalVenue
                            </div>
                        </div>

                        <p className='font-[spaceRegualar] md:text-left text-center text-gray-500 text-xl'>
                            C-161 EF, Ground Floor, Majlis park, Near ram mandir, Gali No- 7, Delhi, DELHI, North West 110033
                        </p>

                        <h1 className='font-[spaceRegualar] text-2xl mt-8'>Verified Lending Partners</h1>

                        {/* ⭐ FIXED — LOGOS NEVER WRAP OR SHIFT ANYTHING */}
                        <div className='flex gap-5 flex-nowrap overflow-hidden w-full'>
                            <img className='shrink-0 w-16 md:w-12 h-auto object-contain' src="/part1.png" alt="" />
                            <img className='shrink-0 w-16 md:w-12 h-auto object-contain' src="/part2.png" alt="" />
                            <img className='shrink-0 w-16 md:w-12 h-auto object-contain' src="/part5.png" alt="" />
                            <img className='shrink-0 w-16 md:w-12 h-auto object-contain' src="/part3.png" alt="" />
                        </div>

                    </div>

                </div>

                <div className='flex flex-col gap-5 items-center h-full  text-center justify-center md:w-1/3 w-full md:items-start md:text-left md:justify-start relative '>
                    <div className='absolute right-0 -top-2 md:block hidden'>
                        <svg width="75" height="80" viewBox="0 0 75 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.8131 47.5977C25.2524 42.2948 8.12087 39.972 0.000195994 39.4735C18.6133 38.5756 27.4902 33.1001 29.602 30.4747C34.4314 27.4097 36.9365 8.88094 37.5853 -0.000338786C38.1128 8.31705 40.4701 26.2471 45.6794 31.428C50.8888 36.6089 67.0051 39.3103 74.4121 40.0134C59.1831 39.9534 49.7551 44.2901 46.9447 46.466C40.7211 49.2292 37.5958 69.4532 36.8111 79.2198C36.9357 60.2257 31.531 50.2242 28.8131 47.5977Z" fill="#6BD1D3" />
                        </svg>

                    </div>
                    <h1 className='font-[spaceBold] text-3xl md:text-4xl'>Your Journey to Giving Starts Here</h1>
                    <p className='font-[spaceRegualar] text-center md:text-left text-gray-500 text-xl'>
                        Transparent. Trusted. Impactful. Let’s build a better future.
                    </p>
                    <Link to='/Contact us'>
                        <Btn value={"Get Started"} font={"spaceBold"} />
                    </Link>

                    <div className='flex gap-3 items-center'>
                        <h1 className='font-[spaceRegualar]'>Follow us on</h1>
                        <Link to="https://www.instagram.com/capital_venue/" className='text-2xl cursor-pointer'><i className="ri-instagram-fill"></i></Link>
                        <Link to="https://x.com/capital_venue" className='text-2xl cursor-pointer'><i className="ri-twitter-x-fill"></i></Link>
                        <Link to='https://www.facebook.com/share/1AdFnryQ7Y/' className='text-2xl cursor-pointer'><i className="ri-facebook-circle-fill"></i></Link>
                    </div>
                </div>

            </div>

            <div className='w-full p-8 md:justify-between md:flex-row flex flex-col gap-5 items-center justify-center text-white bg-[#14263E]'>
                <Link to='/privacy' className='cursor-pointer font-[spaceRegualar]'>Privacy & Policy</Link>
                <Link to='/terms' className='cursor-pointer font-[spaceRegualar]'>Terms & Conditions</Link>
                <h1 className='
                
                font-[spaceRegualar]'>All Copyright Reserved @2025</h1>
            </div>

        </div>
    )
}

export default Footer
