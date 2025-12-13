import React, { useState } from 'react'
import { PieChart, Pie, Cell } from "recharts";
import Btn from '../components/Btn';

const COLORS = ["#6ad9df", "#e5e5e5"];

const Form = () => {

    const Loandata = {
        personalLoan: { label: "Personal Loan", rate: 10.15 },
        businessLoan: { label: "Business Loan", rate: 14.5 },
        homeLoan: { label: "Home Loan", rate: 8.5 },
        loanProperty: { label: "Loan Against Property", rate: 9 },
        professionalLoan: { label: "Professional Loan", rate: 10.5 },
    };
    const [loanType, setLoanType] = useState("personalLoan");

    const [loanAmount, setLoanAmount] = useState({
        min: 100000,
        max: 10000000,
        step: 10000,
        value: 1000000
    });
    const loanPercent = ((loanAmount.value - loanAmount.min) / (loanAmount.max - loanAmount.min)) * 100;
    const rateOfInterest = Loandata[loanType].rate;
    const rateOfInterestPercent = ((rateOfInterest - 5) / (20 - 5)) * 100;
    const [tenureMonths, setTenureMonths] = useState(40);
    const tenureMonthsPercent = ((tenureMonths - 12) / (60 - 12)) * 100;

    const P = loanAmount.value;
    const annualRate = rateOfInterest;
    const r = annualRate / 12 / 100;
    const n = tenureMonths;

    const EMI =
        (P * r * Math.pow(1 + r, n)) /
        (Math.pow(1 + r, n) - 1);


    const roundedEMI = Math.round(EMI);
    const totalPayable = Math.round(roundedEMI * n);
    const totalInterest = totalPayable - P;
    const formatINR = (value) =>
        value.toLocaleString("en-IN");
const pieData = [
    { name: "Principal", value: P },
    { name: "Interest", value: totalInterest },
];


    return (
        <div className='w-full md:h-screen bg-[#F1FCFE] flex items-center justify-center p-12 '>
            <div className='w-full p-6 bg-white flex flex-col md:flex-row md:px-40 md:py-10 items-center gap-10 rounded-xl shadow-2xl'>
                <div className=' flex flex-col md:w-[70%] items-start justify-center gap-10'>
                    <div className='w-full'>
                        <h1 className='text-[3vw]  md:text-[1vw] text-gray-500 font-[spaceRegualar] '>
                            Select Your Loan Type
                        </h1>
                        <input type="text" />
                        <select
                            value={loanType}
                            onChange={(e) => setLoanType(e.target.value)}
                            className='w-full p-2 outline-none border capitalize border-gray-300 rounded'
                        >
                            {Object.entries(Loandata).map(([key, loan]) => (
                                <option key={key} value={key}>
                                    {loan.label}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className='w-full flex flex-col gap-5'>
                        <div className='w-full flex items-center justify-between'>
                            <h1 className='text-[3vw] md:text-[1vw] text-gray-500 font-[spaceRegualar]'>Loan Amount</h1>
                            <div className='bg-[#FFFAED] md:min-w-[10vw] min-w-[28vw] flex items-center justify-center px-10 py-3 rounded border border-zinc-400'>
                                {loanAmount.value}
                            </div>
                        </div>
                        <div className='w-full relative  flex flex-col gap-3'>
                            <input
                                type="range"
                                min={loanAmount.min}
                                max={loanAmount.max}
                                step={10000}
                                value={loanAmount.value}
                                onChange={(e) =>
                                    setLoanAmount(prev => ({
                                        ...prev,
                                        value: Number(e.target.value)
                                    }))
                                }

                                className=" absolute top-0 left-0 w-full h-3 opacity-1 cursor-pointer z-10"
                            />
                            <div className='w-full h-0.5 bg-zinc-400'>
                                <div className='h-full w-[20%] relative bg-[#6BD1D3]' style={{ width: `${loanPercent}%` }}>
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
                                {rateOfInterest}%
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-3'>
                            <div className='w-full h-0.5 bg-zinc-400'>
                                <div className='h-full w-[60%] relative bg-[#6BD1D3]' width={`${rateOfInterestPercent}%`}>
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
                                {tenureMonths}
                            </div>
                        </div>
                        <div className='relative w-full flex flex-col gap-3'>
                            <input
                                type="range"
                                min="12"
                                max="60"
                                step={1}
                                value={tenureMonths}
                                onChange={(e) => setTenureMonths(Number(e.target.value))}

                                className=" absolute top-0 left-0 w-full h-3 opacity-1 cursor-pointer z-10"
                            />
                            <div className='w-full h-0.5 bg-zinc-400'>
                                <div className='h-full  relative bg-[#6BD1D3]' style={{ width: `${tenureMonthsPercent}%` }}>
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
                                    data={pieData}
                                    dataKey="value"
                                    startAngle={90}
                                    endAngle={-270}
                                    innerRadius={110}
                                    outerRadius={150}
                                    stroke="none"
                                    isAnimationActive={true}
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
                                    ₹ {formatINR(totalPayable)}
                                </p>
                            </div>
                        </div>



                    </div>
                    <div className='w-full h-full flex  items-center flex-col gap-15'>
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
                                            ₹ {formatINR(P)}
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
                                            ₹ {formatINR(totalPayable)}
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='w-full flex items-center border-y py-2 border-[#A4A4A4] justify-between'>
                            <h1 className='font-[spaceBold] text-xl  '>Monthly EMI</h1>
                            <h1 className='font-[spaceBold] text-xl  '>₹ {formatINR(roundedEMI)}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
