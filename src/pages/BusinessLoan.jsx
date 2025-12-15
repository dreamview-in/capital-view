import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Btn from '../components/Btn';
import Form from '../components/Form';

const BusinessLoan = () => {
    const faqs = [
        {
            question: "How is business Loan interest rate calculated?",
            answer:
                "We offers the lowest interest rates in the market across all segments. As we offer customers an unsecured loan i.e. collateral-free loan, the rate of Interest will be higher as compared to secured products offered by banks.",
        },
        {
            question: "How is business Loan processing fee calculated?",
            answer:
                "Processing fees are restricted to 2% + GST which is standard across all the products.",
        },
        {
            question: "What are the foreclosure charges for Business Loan?",
            answer:
                "Customers can foreclose loans after 6 EMI payments. The foreclosure charges are 4% + GST of the outstanding loan amount. The grid defers as per loan tenor.",
        },
        {
            question: "What are the steps for foreclosing an Business Loan?",
            answer:
                "The minimum lock-in period for Business Loan is 6 months i.e. 6 EMIs paid.",
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
                        About Business Loan
                    </h1>

                    <p className="text-base sm:text-xl font-[spaceRegualar] text-gray-700 leading-relaxed max-w-5xl mb-5">
                        With small business loans up to Rs. 30 lakh, funding for your small business is now just 24 hours away. Use the funds to invest in infrastructure, expand operations, upgrade to the latest plant and machinery, maintain inventory, or to increase working capital. These customized loans can give your business the much-needed boost to help your enterprise scale new heights with enhanced competitiveness and profitability.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mb-5 font-[spaceRegualar]">
                        <p className="text-gray-600 leading-relaxed">
                            Withdraw only what you need and repay funds as per your business cash flow at nil prepayment charges. Pay only interest as EMIs, and repay the principal at the end of the tenor. Interest is charged only on the amount withdrawn, helping you to lower your EMIs by up to 45% and helping your cash flow.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our business loans are collateral-free, which means you won’t have to put your personal or business assets on the line to get financing. And since you don’t need to pledge collateral, there is no requirement for appraisal of the value of your assets. As a result, with collateral-free loans, funding is much faster and requires only minimal documentation.
                        </p>
                    </div>

                    <hr className="border-gray-500 max-w-5xl mb-5" />

                    <p className="text-gray-600 leading-relaxed max-w-5xl mb-10 font-[spaceRegualar]">
                        Small and medium enterprises can now grow their operations and scale in an easy way with SME and MSME loans..
                    </p>
                    <div onClick={handleScrollToForm} className="cursor-pointer">
                        <Btn value={`Apply for Presonal Loan `} font="spaceBold" />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <section className=" bg-white px-6 sm:px-12 lg:px-24 py-20">
                    <div className="max-w-6xl mb-16">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1f2a44] mb-4">
                            Business Loan Products
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
                            Achieve all your goals and aspirations; with the right kind of help,
                            exactly when you need it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 max-w-6xl">

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                                Medical Emergency
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Borrow Loan Company offers you personal loan for your unexpected
                                medical emergency. Get instant personal loan for your all kind of
                                medical emergency expenses.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                                Wedding Purpose
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                You can manage your dream marriage day with our personal loan
                                option. Have the wedding celebration of your dreams. Apply now
                                personal loan for wedding purpose.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                                Abroad Travel
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Get the funds for the expenditure involved in going abroad for
                                taking up employment. Manage your personal with Borrow Company
                                for fulfill your travelling to abroad.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                                Child Educations
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We provides child loan for pursuing higher. We given the right
                                tools to every potential child. Also, grant personal loan for
                                your child higher education.
                            </p>
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
                            Features of Business Loan
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
                                    Faster Loan
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    For funding medical expenses, hospitalization, surgery,
                                    No collateral required.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="text-[#75DCE3] text-4xl mt-1">
                                <i className="ri-lightbulb-flash-line"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                    Choose your amount
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    All charges are communicated up front in writing along
                                    with the loan quotation.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="text-[#75DCE3] text-4xl mt-1">
                                <i className="ri-hand-coin-line"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                    Enjoy the best rates
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our loan rates and charges are very attractive.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="text-[#75DCE3] text-4xl mt-1">
                                <i className="ri-settings-3-line"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                    Decide your tenure
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    A personal loan has a wide variety of uses and can come
                                    in handy for meeting either planned or emergency expenditure.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">

                    <div className="mb-14">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1f2a44] mb-4">
                            Business Loan - Eligibility
                        </h2>
                        <p className="text-gray-600 max-w-5xl leading-relaxed">
                            Self employed individuals, Proprietors, Private Ltd. Co. and Partnership Firms involved in the business of Manufacturing, Trading or Services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10">

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                Age
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                The applicant should be at least 21 years at the time of applying for the loan, and should be no older than 65 years at the time of loan maturity
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                Income
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                The business should have a minimum turnover of Rs. 40 lakhs
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                Flexible Tenure
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                You can repay your loan over a period of 12 to 48 months.
                            </p>
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
            <Form/>
        </>
    )
}

export default BusinessLoan
