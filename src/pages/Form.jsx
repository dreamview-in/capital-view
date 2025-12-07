import React from 'react'
import { PieChart, Pie, Cell } from "recharts";

const data = [{ value: 60 }, { value: 40 }];
const COLORS = ["#6ad9df", "#e5e5e5"];

const Form = () => {
    return (
        <div className='w-full md:h-screen bg-[#F1FCFE] flex items-center justify-center p-12 '>
            <div className='w-full p-6 bg-white flex flex-col md:flex-row md:px-40 md:py-10 items-center gap-10 rounded-xl shadow-2xl'>
                <div className=' flex flex-col md:w-[70%] items-start justify-center gap-10'>
                    <div className='w-full'>
                        <h1 className='text-[3vw]  md:text-[1vw] text-gray-500 font-[spaceRegualar] '>
                            Select Your Loan Type
                        </h1>
                        <input type="text" />
                        <select className='w-full p-2 outline-none pr-2 border border-gray-300 rounded '>
                            <option value="">Personal Loan</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <div className='w-full flex flex-col gap-5'>
                        <div className='w-full flex items-center justify-between'>
                            <h1 className='text-[3vw] md:text-[1vw] text-gray-500 font-[spaceRegualar]'>Loan Amount</h1>
                            <div className='bg-[#FFFAED] md:min-w-[10vw] min-w-[28vw] flex items-center justify-center px-10 py-3 rounded border border-zinc-400'>
                                1000000
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-3'>
                            <div className='w-full h-0.5 bg-zinc-400'>
                                <div className='h-full w-[20%] relative bg-[#6BD1D3]'>
                                    <div className='h-3 w-3 rounded-full  absolute -top-1 right-0 bg-[#6BD1D3]'></div>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <h1 className='text-[2.5vw] md:text-[1vw] text-gray-500 font-[spaceRegualar] '>
                                    ₹1L
                                </h1>
                                <h1 className='text-[2.5vw] md:text-[1vw] text-gray-500 font-[spaceRegualar] '>
                                    ₹1Cr
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-5'>
                        <div className='w-full flex items-center justify-between'>
                            <h1 className='text-[3vw] md:text-[1vw] text-gray-500 font-[spaceRegualar]'>Rate Of Interest (P.A.)</h1>
                            <div className='bg-[#FFFAED] md:min-w-[10vw] min-w-[28vw] flex items-center justify-center px-10 py-3 rounded border border-zinc-400'>
                                10%
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-3'>
                            <div className='w-full h-0.5 bg-zinc-400'>
                                <div className='h-full w-[60%] relative bg-[#6BD1D3]'>
                                    <div className='h-3 w-3 rounded-full  absolute -top-1 right-0 bg-[#6BD1D3]'></div>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <h1 className='text-[2.5vw] md:text-[1vw] text-gray-500 font-[spaceRegualar] '>
                                    5%
                                </h1>
                                <h1 className='text-[2.5vw] md:text-[1vw] text-gray-500 font-[spaceRegualar] '>
                                    20%
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-5'>
                        <div className='w-full flex items-center justify-between'>
                            <h1 className='text-[3vw] md:text-[1vw] text-gray-500 font-[spaceRegualar]'>Tenure Months</h1>
                            <div className='bg-[#FFFAED] md:min-w-[10vw] min-w-[28vw] flex items-center justify-center px-10 py-3 rounded border border-zinc-400'>
                                40
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-3'>
                            <div className='w-full h-0.5 bg-zinc-400'>
                                <div className='h-full w-[70%] relative bg-[#6BD1D3]'>
                                    <div className='h-3 w-3 rounded-full  absolute -top-1 right-0 bg-[#6BD1D3]'></div>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <h1 className='text-[2.5vw] md:text-[1vw] text-gray-500 font-[spaceRegualar] '>
                                    12
                                </h1>
                                <h1 className='text-[2.5vw] md:text-[1vw] text-gray-500 font-[spaceRegualar] '>
                                    60

                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-10 md:flex-row items-center justify-center'>
                    <div className='w-full gap-8 flex flex-col  items-center justify-center'>
                        <div className="relative w-[320px] h-80 flex items-center justify-center">
                            <PieChart width={350} height={350}>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    startAngle={90}
                                    endAngle={-270}
                                    innerRadius={110}   
                                    outerRadius={150}   
                                    stroke="none"
                                >
                                    {COLORS.map((c, i) => (
                                        <Cell key={i} fill={c} />
                                    ))}
                                </Pie>
                            </PieChart>

                            <div className="absolute text-center">
                                <p className="text-gray-800 text-[0.9rem] md:text-[.7rem] font-[spaceRegualar]">
                                    Total Amount Payable
                                </p>
                                <p className="text-[1.6rem] md:text-[1.9rem] font-semibold font-[spaceRegualar]">
                                    ₹ 18,03,280
                                </p>
                            </div>
                        </div>



                    </div>
                    <div className='w-full h-full flex flex-col gap-15'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center flex-col gap-4 w-full px-4'>
                                <div className='flex items-center gap-3'>
                                    <div className='flex flex-col items-center leading-tight'>
                                        <div className='flex items-center gap-2'>
                                            <span className='h-3 w-3 rounded-full bg-[#6ad9df]'></span>
                                            <p className='text-[3vw] md:text-[1vw] text-gray-500 font-[spaceRegualar]'>
                                                Principle Amount
                                            </p>
                                        </div>
                                        <p className='text-center text-[5vw] md:text-[1.2vw] font-semibold mt-1 font-[spaceRegualar]'>
                                            ₹ 10,00,000
                                        </p>
                                    </div>
                                </div>


                            </div>
                            <div className='flex items-center flex-col gap-4 w-full px-4'>
                                <div className='flex items-center gap-3'>
                                    <div className='flex flex-col items-center leading-tight'>
                                        <div className='flex items-center gap-2'>
                                            <span className='h-3 w-3 rounded-full bg-[#E2E2E2]'></span>
                                            <p className='text-[3vw] md:text-[1vw] text-gray-500 font-[spaceRegualar]'>
                                                Total Amount
                                            </p>
                                        </div>
                                        <p className='text-center text-[5vw] md:text-[1.2vw] font-semibold mt-1 font-[spaceRegualar]'>
                                            ₹ 18,03,280
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='w-full flex items-center border-y py-2 border-[#A4A4A4] justify-between'>
                            <h1 className='font-[spaceBold] text-xl  '>Monthly EMI</h1>
                            <h1 className='font-[spaceBold] text-xl  '>₹ 20,607</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
