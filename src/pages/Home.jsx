import React from 'react'
import Btn from '../components/Btn'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-full h-[90vh] overflow-hidden'>
            <div className='w-full md:w-[60%] h-full flex flex-col gap-7 text-white items-center px-8 justify-center md:items-start'>
                <h1 className='text-white font-bold font-[bold-inter] text-4xl md:text-[3.6vw] text-center md:text-left uppercase'>Reliable and <span>Quick Loan</span> Approval for Every Need –</h1>
                <p className='text-center font-[regular-inter] md:text-left md:text-[1.5vw] capitalize'>Affordable EMIs, Flexible Tenures and Easy Approval - Your loan approval is just a step away</p>
                <Link to='/Contact us' >
                <Btn value={'apply now'} font={"semibold"}/>
                </Link>
            </div>
            <div className='w-full h-full overflow-hidden absolute top-0 z-[-1]'>
                <div className='w-full h-full bg-[#15273fd0] absolute '></div>
                <img className='w-full h-full object-cover' src="/home.png" alt="" />
            </div>
        </div>
    )
}

export default Home
