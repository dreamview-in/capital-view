import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Btn from '../components/Btn';
import Form from '../components/Form';


const MSME = () => {
      const faqs = [
            {
                question: "How MSME Loans under CGTMSE Work?",
                answer:
                    "The business applies for an MSME loan under the CGTMSE scheme. The lender assesses eligibility, financials, and business viability. Upon approval, the loan is sanctioned without collateral. The credit guarantee is provided by CGTMSE as per applicable guidelines",
            },
            {
                question: "Who Can Opt for MSME Loans under CGTMSE?",
                answer:
                    "Micro and Small Enterprises as per MSME definition. Manufacturing and service sector units. New as well as existing businesses. First-time entrepreneurs and startups (subject to eligibility).",
            },
            {
                question: "Why Choose MSME Loans under CGTMSE with Capitalvenue?",
                answer:
                    "End-to-end guidance on CGTMSE eligibility and documentation. Transparent and streamlined process. Competitive interest rates. Minimal paperwork. Dedicated relationship support",
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
                        About MSME Loans under CGTMSE
                    </h1>

                    <p className="text-base sm:text-xl font-[spaceRegualar] text-gray-700 leading-relaxed max-w-5xl mb-5">
                       MSME Loans under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme are designed to support micro and small enterprises by providing collateral-free credit. Under this scheme, eligible businesses can access funding without pledging personal or business assets, enabling easier access to finance for growth and operational needs.    
                    </p>
                    <div onClick={handleScrollToForm} className="cursor-pointer">
                        <Btn value={`Apply for MSME Loans `} font="spaceBold" />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <section className=" bg-white px-6 sm:px-12 lg:px-24 py-20">

                    <div className="max-w-6xl mb-16">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1f2a44] mb-4">
                            What Can MSME Loans under CGTMSE Be Used For?
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
                            Achieve all your goals and aspirations; with the right kind of help,
                            exactly when you need it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 max-w-6xl">

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                                Working capital requirements
                            </h3>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                                Purchase of machinery and equipment
                            </h3>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                                Business expansion or capacity enhancement
                            </h3>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                                Technology upgradation
                                Setting up new business units
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
                           Key Benefits of CGTMSE MSME Loans

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
                                    Collateral-Free Financing
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    No need to pledge property or other assets

                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="text-[#75DCE3] text-4xl mt-1">
                                <i className="ri-lightbulb-flash-line"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                    Government Credit Guarantee
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Coverage provided under the CGTMSE scheme
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="text-[#75DCE3] text-4xl mt-1">
                                <i className="ri-hand-coin-line"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                    Improved Access to Credit
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                     Especially beneficial for first-time borrowers
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="text-[#75DCE3] text-4xl mt-1">
                                <i className="ri-settings-3-line"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                    Flexible Loan Structures
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                   Available as term loans or working capital facilities <b>Supports MSME Growth:</b> Encourages entrepreneurship and business sustainability
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
                     CGTMSE coverage, loan limits, interest rates, tenure, and eligibility criteria are governed by CGTMSE guidelines and lender policies. Final approval is subject to due diligence and regulatory norms.
                    </p>
                </div>
            </div>

            <Form />
        </>
  )
}

export default MSME
