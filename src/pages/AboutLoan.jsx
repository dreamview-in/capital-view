import React, { use } from 'react'
import Btn from '../components/Btn'
import { Link, useLocation } from 'react-router-dom'

const AboutLoan = () => {
    const location  = useLocation();
    const loan = location.state?.loan;
    
  if (!loan) {
    return (
      <div className='w-full min-h-screen flex items-center justify-center'>
        <p className='text-xl'>No loan selected. Please go back and select a loan.</p>
      </div>
    );
  }
    return (
        <div className='w-full min-h-screen flex items-center flex-col gap-5 justify-center bg-white px-4 py-8'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[spaceBold] text-center'>{loan.name}</h1>
                <p className='text-base sm:text-lg text-gray-700 leading-relaxed w-full sm:w-3/4 lg:w-1/2 text-center'>
                        {loan.desc1}
                </p>
                <p className='text-base sm:text-lg text-gray-700 leading-relaxed w-full sm:w-3/4 lg:w-1/2 text-center'>
                        {loan.desc2}
                </p>
                <Link to="/loanform" >
                <Btn value="apply for loan" font="spaceBold"/>
                </Link>
        </div>
    )
}

export default AboutLoan
