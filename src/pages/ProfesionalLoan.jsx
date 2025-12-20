import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Btn from '../components/Btn';
import Form from '../components/Form';

const ProfesionalLoan = () => {
    const faqs = [
        {
            question: "Who is eligible for the Professional Loan?",
            answer:
                "Self-employed professionals such as Doctors, Company Secretaries (CS), Chartered Accountants (CA) etc. are eligible for a Professional Loan. However, to get approval, professionals must meet the professional loan eligibility criteria.",
        },
        {
            question: "When should I take a Professional Loan?",
            answer:
                "Anytime is a good time to avail a Professional Loan. A Professional Loan helps you with the capital for your personal or professional needs and is an efficient way of handling your expense.",
        },
        {
            question: "Do I have to pledge assests to get a Professional Loan?",
            answer:
                "No. This is an unsecured offering, and you do not need to pledge assets to qualify for the sanction.",
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
            <div className="w-full md:h-screen flex items-center justify-center flex-col md:justify-end md:mt-0 mt-[12vh]  bg-white px-6 sm:px-12 lg:px-24 py-16">
                <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24">
                    <h1 className="text-3xl font-[spaceBold] sm:text-4xl font-semibold text-[#1f2a44] mb-6">
                        About Professional Loan
                    </h1>

                    <p className="text-base sm:text-xl font-[spaceRegualar] text-gray-700 leading-relaxed max-w-5xl mb-5">
                        As a professional, you’ve spent years to acquire specialised skills. From various personal financial goals to professional commitments- you have to manage all in a limited time.
                        As a professional, your financial needs are unique. We believes that your loans should be no different. That’s why we offer special loans to professionals like you. By factoring in your professional degree and experience, professional loans come with simple eligibility criteria and minimum documentation requirements so that you get access to funds faster than regular term loans.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mb-5 font-[spaceRegualar]">
                        <p className="text-gray-600 leading-relaxed">
                           Customised to suit your every need, a Loan for Doctors has a suite of 4 loans- personal loans, business loans, home loans and loans against property.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                           To help chartered accountants make the most out of their money, We offers a suite of 4 loans for chartered accountants including personal loans, business loans, home loans and loans against property.
                        </p>
                    </div>

                    <hr className="border-gray-500 max-w-5xl mb-5" />

                    <p className="text-gray-600 leading-relaxed max-w-5xl mb-10 font-[spaceRegualar]">
                       Salaried and self-employed engineers can now easily meet their personal and professional needs with an exclusive loan for engineers.
                    </p>
                    <div onClick={handleScrollToForm} className="cursor-pointer">
                        <Btn value={`Apply for Professional Loan `} font="spaceBold" />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <section className=" bg-white px-6 sm:px-12 lg:px-24 py-20">
                    <div className="max-w-6xl mb-16">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1f2a44] mb-4">
                          Professional Loan Products
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
                            Achieve all your goals and aspirations; with the right kind of help,
                            exactly when you need it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 max-w-6xl">

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                               Loan for Doctors
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              Customised to suit your every need,  Our Loan for Doctors has a suite of 4 loans- personal loans, business loans, home loans and loans against property
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                               Loan for Chartered Accountants
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                To help chartered accountants make the most out of their money, We offers a suite of 4 loans for chartered accountants including personal loans, business loans, home loans and loans against property.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                              Professional Loan for Engineers
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Salaried and self-employed engineers can now easily meet their personal and professional needs with an exclusive loan for engineers.
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
                            Features of Professional Loan

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
                                  Loans up to Rs.2 crore
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Personal loans and business loans offer unsecured finance up to Rs.37 lakh. Home loans and loans against property offer secured capital up to Rs.2 crore.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="text-[#75DCE3] text-4xl mt-1">
                                <i className="ri-lightbulb-flash-line"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                    Flexi Loan facility
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Withdraw on your loan as many times you want and pay interest only on what your use. Repay at your convenience at no extra cost and lower your EMIs by up to 45%.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="text-[#75DCE3] text-4xl mt-1">
                                <i className="ri-hand-coin-line"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                   Quick processing
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Unsecured loans are credited to your account in 24 hours with secured loans approved in under 24 hours.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="text-[#75DCE3] text-4xl mt-1">
                                <i className="ri-settings-3-line"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                    Quick apply
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Apply online in minutes after meeting the simple eligibility criteria.
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
                          Professional Loan - Eligibility
                        </h2>
                        <p className="text-gray-600 max-w-5xl leading-relaxed">
                            Any salaried, self-employed or professional Public and Privat companies, Government sector employees including Public Sector is eligible for a business loan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10">

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                Age
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Maximum age of applicant at loan maturity: 60 years
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                Income
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Minimum Net Monthly Income: Rs 15,000
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                                Credit Rating
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Applicant should have the bank specified credit score.
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

export default ProfesionalLoan
