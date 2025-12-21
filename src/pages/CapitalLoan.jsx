import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Btn from '../components/Btn';
import Form from '../components/Form';


const CapitalLoan = () => {
    const faqs = [
        {
            question: "How a Working Capital Loan Works?",
            answer:
                "The lender assesses business financials and cash flow A credit limit or loan amount is sanctioned Funds are disbursed as a term loan or revolving facility Interest is charged based on utilization (in case of overdraft/cash credit).",
        },
        {
            question: "Who Can Opt for a Working Capital Loan?",
            answer:
                "Small & Medium Enterprises (SMEs / MSMEs) Traders, manufacturers, and distributors Service-based businesses Start-ups with stable revenue streams.",
        },
        {
            question: "Why Choose Working Capital Loans with Capitalvenue?",
            answer:
                "Simplified and transparent process Competitive interest rates Minimal documentation Fast turnaround time Relationship-driven support.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const location = useLocation();
    const loan = location.state?.loan;

    if (!loan) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center bg-white">
                <p className="text-lg text-gray-600">
                    No loan selected. Please go back and select a loan.
                </p>
            </div>
        );
    }

    const handleScrollToForm = () => {
        document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <>
            <div className="w-full md:h-screen flex items-center justify-center flex-col md:mt-0 mt-[12vh]  bg-white px-6 sm:px-12 lg:px-24 py-16">
                <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24">
                    <h1 className="text-3xl font-[spaceBold] sm:text-4xl font-semibold text-[#1f2a44] mb-6">
                        About Working Capital Loans
                    </h1>

                    <p className="text-base sm:text-xl font-[spaceRegualar] text-gray-700 leading-relaxed max-w-5xl mb-5">
                        A Working Capital Loan helps businesses manage their day-to-day operational expenses and maintain smooth cash flow. It is designed to finance short-term needs such as inventory purchase, vendor payments, salaries, rent, and other recurring business expenses—ensuring uninterrupted operations and steady growth.
                    </p>
                    <div onClick={handleScrollToForm} className="cursor-pointer">
                        <Btn value={`Apply for Working Capital Loan `} font="spaceBold" />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <section className=" bg-white px-6 sm:px-12 lg:px-24 py-20">

                    <div className="max-w-6xl mb-16">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1f2a44] mb-4">
                            What Can a Working Capital Loan Be Used For?
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
                            Achieve all your goals and aspirations; with the right kind of help,
                            exactly when you need it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 max-w-6xl">

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                                Purchase of raw materials or inventory
                            </h3>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                                Vendor and supplier payments
                            </h3>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                                Salaries and operational expenses
                            </h3>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                                Rent, utilities, and overhead costs
                                Managing seasonal or cyclical cash flow gaps
                            </h3>
                        </div>

                    </div>
                </section>
            </div>
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <section className="w-full bg-[#16589a] py-20">
                    <div className="flex flex-col items-center justify-center text-center px-6">

                        <h2 className="text-white text-2xl font-[spaceBold] sm:text-3xl font-semibold mb-8">
                            Get financing for whatever you need now
                        </h2>

                        <Btn
                            value="ENQUIRE NOW"
                            font="spaceBold"
                            className="bg-[#9bc53d] hover:bg-[#8ab634]"
                        />
                    </div>
                </section>
            </div>

            <section className="w-full bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">

                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1f2a44] mb-4">
                            Key Benefits of Working Capital Loans
                        </h2>
                        <p className="text-gray-600 max-w-3xl">
                            All loans are not created equal, personal loan has become a great
                            option for people to use.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

                        <div className="flex flex-col gap-6">
                            <div className="text-[#75DCE3] text-4xl mt-1">
                                <i className="ri-speed-up-line"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                    Improved Cash Flow
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Ensures smooth day-to-day business operations

                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="text-[#75DCE3] text-4xl mt-1">
                                <i className="ri-lightbulb-flash-line"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                    Flexible Financing Options
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Available as overdraft, cash credit, or short-term loans
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="text-[#75DCE3] text-4xl mt-1">
                                <i className="ri-hand-coin-line"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                    Quick Access to Funds
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Faster processing to meet urgent requirements
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="text-[#75DCE3] text-4xl mt-1">
                                <i className="ri-settings-3-line"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                    Customized Repayment
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Structured to match business cash cycles <b>Supports Business Growth:</b> Helps businesses scale without liquidity constraints Interest is charged only on the utilized amount
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <div className="max-w-6xl mx-auto p-6">
                <h2 className="text-3xl font-semibold text-black mb-2">
                    Frequently Ask Questions
                </h2>
                <p className="text-gray-500 mb-8">
                    If you have a question that deals with clients, customers or the public
                    in general, there is bound to be a need for the FAQ page.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center py-4 text-left 
                         text-black font-medium text-lg
                         focus:outline-none focus:ring-0 active:text-black"
                            >
                                <h1>{faq.question}</h1>
                                <h1 className="text-2xl select-none">
                                    {activeIndex === index ? "−" : "+"}
                                </h1>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out
                ${activeIndex === index
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="pb-4 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full md:h-[60vh] flex items-center justify-center flex-col md:mt-0 mt-[12vh]  bg-white px-6 sm:px-12 lg:px-24 py-16">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                    <h1 className="text-3xl font-[spaceBold] sm:text-4xl font-semibold text-[#1f2a44] mb-6">
                        Important Note

                    </h1>

                    <p className="text-base sm:text-xl font-[spaceRegualar] text-gray-700 leading-relaxed max-w-7xl mb-5">
                       Loan eligibility, limits, interest rates, tenure, and collateral requirements are subject to lender policies and regulatory guidelines. Approval depends on business performance and financial evaluation.
                    </p>
                </div>
            </div>

            <Form />
        </>
    )
}

export default CapitalLoan
