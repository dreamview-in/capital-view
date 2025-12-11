import React from 'react'
import Btn from '../components/Btn'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='w-full md:h-screen p-10 flex items-center justify-center bg-white'>
            <div className=' p-12 flex flex-col md:flex-row-reverse items-center bg-[#F1FCFE] justify-center gap-6'>
                <div className='w-full h-full flex items-center justify-center'>
                    <img className='w-[60%] md:w-[80%]' src="/contact.gif" alt="" />
                </div>
                <div className='w-full relative flex flex-col items-center py-4 justify-center md:items-start px-5 gap-5'>
                    <h1 className='text-center md:text-left text-[5vw] md:text-[2.3vw] font-[spaceRegualar]'><b>CaptialVenue</b> simplifies finance with smart solutions and growth-driven partnerships.</h1>
                    <div className='md:absolute hidden top-0 -right-10'>
                        <svg width="100" height="107" viewBox="0 0 100 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.6176 63.7964C33.8451 56.6889 10.8835 53.5757 -0.000809458 52.9075C24.9467 51.704 36.8445 44.3651 39.675 40.8461C46.148 36.7381 49.5055 11.9037 50.3752 -4.00502e-05C51.0822 11.1479 54.2417 35.1798 61.2239 42.1239C68.2061 49.068 89.807 52.6887 99.7347 53.6311C79.323 53.5507 66.6865 59.3632 62.9197 62.2796C54.5781 65.9832 50.3893 93.0898 49.3376 106.18C49.5045 80.722 42.2605 67.3168 38.6176 63.7964Z" fill="#6BD1D3" />
                        </svg>

                    </div>

                    <p className='text-center md:text-left md:text-2xl text-gray-500 font-[spaceRegualar]'>Empowering businesses with seamless <br /> funding solutions and strategic growth support.</p>

                    <div className='flex flex-col gap-6 mt-4 md:flex-row md:gap-40'>
                        <div>
                            <h1 className='text-2xl font-[semibold] text-center md:text-left'>700+</h1>
                            <h1 className='text-xl font-[regular-inter]'>
                                Financial advisors</h1>
                        </div>
                        <div>
                            <h1 className='text-xl font-[semibold] text-center md:text-left'> 125+</h1>
                            <h1 className='text-2xl font-[regular-inter]'>

                                Lending partners</h1>
                        </div>
                    </div>
                    <Link to='/form' className='mt-5'>
                        <Btn value={"contact us"} font={"spaceRegualar"} />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Contact
