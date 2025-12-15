import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Btn from '../components/Btn';
import Form from '../components/Form';

const PersonalLoan = () => {
    const faqs = [
        {
          question: "What is the minimum credit score required to get a personal loan?",
          answer:
            "It depends on the eligibility criteria set by the lender. Most lenders do not specify a minimum credit score for a personal loan. Some lenders might lend to applicants with low credit scores (less than 750) but the interest rate applicable is usually higher in such cases.",
        },
        {
          question: "What is the minimum salary required to get a personal loan?",
          answer:
            "The minimum monthly salary required to avail personal loans varies from lender to lender. However, for large lenders like private and public sector banks, the minimum income eligibility is Rs. 15,000 per month and above.",
        },
        {
          question: "Can I use a personal loan for marriage purposes?",
          answer:
            "Yes, you can avail personal loan to meet marriage-related expenditure as personal loans come with flexible end-use. Some lenders even provide personal loans specifically named as wedding/ marriage loans.",
        },
        {
          question: "How do I cancel my personal loan after the loan is disbursed?",
          answer:
            "You cannot cancel your personal loan after the loan disbursement. However, you can prepay the loan amount. However, prepaying the personal loan may attract some prepayment or foreclosure charges, depending on the lender’s loan policies. Some lenders may also restrict personal loan prepayment or foreclosure till the repayment of a pre-determined number of EMIs.",
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
            About Presonal Loan 
          </h1>

          <p className="text-base sm:text-xl font-[spaceRegualar] text-gray-700 leading-relaxed max-w-5xl mb-5">
            Presonal Loan  is the obvious choice if you need a finance for Personal finance, Medical emergency, Wedding purposes, Abroad travel, Holidays, Child education and for buying consumer durable things.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mb-5 font-[spaceRegualar]">
            <p className="text-gray-600 leading-relaxed">
              The personal loan interest rates vary between 10.15% p.a. and 36% p.a. Depending on the loan amount availed by you, your credit score, and repayment tenure, the interest rate charged on your loan is decided.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If you maintain a high credit score and have a good relationship with the bank, then the interest rate on your personal loan can be lowered.
            </p>
          </div>

          <hr className="border-gray-500 max-w-5xl mb-5" />

          <p className="text-gray-600 leading-relaxed max-w-5xl mb-10 font-[spaceRegualar]">
            It can broadly be used for consolidating your debt (from other loans or credit cards), making high-value purchases for which you do not have cash in hand, or for emergency situations.
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
              Presonal Loan  Products
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
              Features of Presonal Loan 
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
              Presonal Loan  – Eligibility
            </h2>
            <p className="text-gray-600 max-w-5xl leading-relaxed">
              The eligibility criteria for personal loans may vary from lender to
              lender. However, there are some common criteria which include the
              age of the applicant, his or her income, credit score, the status of
              employment, and so on. Before you apply for a loan, make sure that
              all the eligibility criteria are being fulfilled.
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
                ${
                  activeIndex === index
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

export default PersonalLoan
