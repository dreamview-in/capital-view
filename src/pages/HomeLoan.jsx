import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Btn from '../components/Btn';
import Form from '../components/Form';

const HomeLoan = () => {
      const faqs = [
            {
              question: "What is a home loan?",
              answer:
                "You cannot cancel your personal loan after the loan disbursement. However, you can prepay the loan amount. However, prepaying the personal loan may attract some prepayment or foreclosure charges, depending on the lender’s loan policies. Some lenders may also restrict personal loan prepayment or foreclosure till the repayment of a pre-determined number of EMIs.",
            },
            {
              question: "How long it takes to get a home loan sanctioned?",
              answer:
                "Usually, it takes 3 to 4 weeks to get home loan sanctioned. However, you need to keep a few factors in mind for a better understanding. First of all, you need a pre-approval of your home loan from the concerned lender to get your loan sanctioned. However, pre-approval doesn’t always mean that your loan will be disbursed immediately and depends on certain external as well internal factors. For instance, your loan sanction can be delayed if there’s delay in submission of property or income-related documents.",
            },
            {
              question: "which factors determine my home loan eligibility?",
              answer:
                "Banks/financial institutions consider the following factors such as your age, annual income, occupational stability, resident type, number of co-applicants, credit score, ongoing loans if any, etc. when determining your loan eligibility.",
            },
            {
              question: "Can I prepay my outstanding home loan amount?",
              answer:
                "Yes, you can choose to prepay your outstanding loan amount either partially or in full before the completion of your loan tenure. While banks do not charge any prepayment fee on floating rate loans, fixed rate home loans attract a penalty up to 2% of the loan amount if prepaid through refinance.",
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
           About Home Loan
          </h1>

          <p className="text-base sm:text-xl font-[spaceRegualar] text-gray-700 leading-relaxed max-w-5xl mb-5">
          To make your home loan journey a smooth sail, in this article we will help you to know eligibility criteria, rates of interest, process, necessary documents, comparison and transfer for lowest rates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mb-5 font-[spaceRegualar]">
            <p className="text-gray-600 leading-relaxed">
             A home is one of the biggest investments you will make in your life. And, more than that, it is a dream come true for your family and you. We understand what this means to you and our home loans make it as easy and convenient as possible for you to own a home of your choice.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With easy digital processes, quick disbursement, thousands of pre-approved projects and competitive home loan interest rates, our housing loans will make your home buying process a simple and hassle-free affair.
            </p>
          </div>

          <hr className="border-gray-500 max-w-5xl mb-5" />

          <p className="text-gray-600 leading-relaxed max-w-5xl mb-10 font-[spaceRegualar]">
           Home loans are the first in India to offer end to end online processing. You can apply home loan online anytime, anywhere and get quick approval.
          </p>
          <div onClick={handleScrollToForm} className="cursor-pointer">
            <Btn value={`Apply for Home Loan `} font="spaceBold" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <section className=" bg-white px-6 sm:px-12 lg:px-24 py-20">

          <div className="max-w-6xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1f2a44] mb-4">
             Get financing for whatever you need now
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
              Achieve all your goals and aspirations; with the right kind of help,
              exactly when you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 max-w-6xl">

            <div>
              <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
              New Home
              </h3>
              <p className="text-gray-600 leading-relaxed">
                New Home Loan at basic interest rates from our Company. You can apply online and check your eligibility and easy EMI. Fast Approval for your new home loan.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
               Home Conversion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A home conversion loan is a scheme for those who have already taken a housing loan. This loan follow some rules and regulations.It is a part of loan.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                Land Purchase
              </h3>
              <p className="text-gray-600 leading-relaxed">
              We offers home loan for land purchase to make your dream home. You can compare home loan rates with our compare loan table. Apply online for Home Loan.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                Home Renovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant approval for renovation your home. We introduce home improvement loan. It is with basic rate and flexible EMI repayment. For more detail you can check our loan products.
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
              Features of Home Loan
            </h2>
            <p className="text-gray-600 max-w-3xl">
             All loans are not created equal, personal loan has become a great option for people to use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

            <div className="flex flex-col gap-6">
              <div className="text-[#75DCE3] text-4xl mt-1">
              <i class="ri-user-fill"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                 Salaried & Self Employed
                </h3>
                <p className="text-gray-600 leading-relaxed">
                 Our loan sanction is one of the quick with easy documentation and doorstep service.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="text-[#75DCE3] text-4xl mt-1">
                <i className="ri-lightbulb-flash-line"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                  Loan For Agriculturists
                </h3>
                <p className="text-gray-600 leading-relaxed">
                 All charges are communicated up front in writing along with the loan quotation.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="text-[#75DCE3] text-4xl mt-1">
               <i class="ri-home-4-line"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                 Residence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A permanent residence or A rented residence where he/she has resided for at least a year prior to applying for a loan
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="text-[#75DCE3] text-4xl mt-1">
               <i class="ri-money-rupee-circle-fill"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                  Net Annual Income
                </h3>
                <p className="text-gray-600 leading-relaxed">
                 At least Rs.5-6 lakh depending on the type of employment
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
             Home Loan - Eligibility
            </h2>
            <p className="text-gray-600 max-w-5xl leading-relaxed">
              Each bank has specific parameters, based on which they approve a property loan for you. These include age, income, employment status, where you work, what builder you’re buying a house from, etc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10">

            <div>
              <h3 className="text-xl font-semibold text-[#1f2a44] mb-2">
                Age
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Minimum Age: 18 years and Maximum Age: 70 years
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
                Credit score
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A good credit score of at least 750 or more
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

export default HomeLoan
