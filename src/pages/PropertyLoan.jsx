import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Btn from '../components/Btn';
import Form from '../components/Form';


const PropertyLoan = () => {
      const faqs = [
                {
                  question: "Is it mandatory to have a co-applicant for availing LAP?",
                  answer:
                    "A co-applicant for a loan against property is mandatory only when the property being mortgaged is owned by more than one person. In such a case, all co-owners of the property need to apply as co-applicants.",
                },
                {
                  question: "What types of properties are accepted by lenders providing Loan Against Propert(LAP)?",
                  answer:
                    "Different lenders have different criteria for the type of property to be accepted against a mortgage loan. However, mostly all financial institutions accept the residential, commercial or industrial property. It is important to note that the physical condition and age of the property may affect its acceptance by the financial institution.",
                },
                {
                  question: "What is the maximum loan tenure available under LAP?",
                  answer:
                    "Mostly, the tenure of a loan against property goes up to 15 years. However, this may vary from one lender to another.",
                },
                {
                  question: "Can NRIs avail loans against the property?",
                  answer:
                    "Yes, there are several financial institutions that offer loan against property to NRIs.",
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
          About Loan Against Property
          </h1>

          <p className="text-base sm:text-xl font-[spaceRegualar] text-gray-700 leading-relaxed max-w-5xl mb-5">
         Loan Against Property (LAP) or mortgage loan is a type of secured loan offered by banks and Housing Finance Companies (HFCs) against commercial or residential property owned by the borrower. The amount, which is availed by keeping the property as collateral till the loan is fully repaid, can be used by the borrower for various purposes like expanding a business, funding children’s education, meeting medical expenses, and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mb-5 font-[spaceRegualar]">
            <p className="text-gray-600 leading-relaxed">
            The maximum loan amount provided under LAP can go up to 70% of the property value. Along with being cost-effective, loans against property are reasonably convenient to avail and repay due to the relatively low mortgage interest rate.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The availability of higher loan amount and the flexibility to use the amount for various purposes make LAP a better option compared to a personal loan.
            </p>
          </div>

          <hr className="border-gray-500 max-w-5xl mb-5" />

          <p className="text-gray-600 leading-relaxed max-w-5xl mb-10 font-[spaceRegualar]">
        If the amount is used for funding a house, the interest paid on the loan provides tax benefits under Section 24 of the Income Tax Act, 1961, up to an amount of Rs. 2 lakh.
          </p>
          <div onClick={handleScrollToForm} className="cursor-pointer">
            <Btn value={`Apply for Loan Against Property `} font="spaceBold" />
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
           High-value loans made affordable
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ample Credit gives you access to a higher loan amount at affordable Loan against Property interest rates. Salaried individuals get a high loan amount up to Rs.1 crore, while self-employed individuals can avail a loan of up to Rs.3.5 crore.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
               Flexible tenure
              </h3>
              <p className="text-gray-600 leading-relaxed">
               Salaried individuals can select a tenure ranging from 2 to 20 years and repay the loan conveniently. Self-employed individuals can select a tenure of up to 18 years to repay the loan. You can part-prepay or prepay your loan anytime at minimal charges.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
                Easy balance transfer facility
              </h3>
              <p className="text-gray-600 leading-relaxed">
            Transfer your existing loan using Loan against Property Balance Transfer facility to Ample Credit with minimal documentation and quick processing and get a high-value top-up loan.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
               Flexi dropline feature
              </h3>
              <p className="text-gray-600 leading-relaxed">
             Borrow as you go and pay interest only on the amount utilised. Manage your finances effectively and pay interest-only EMIs.
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

export default PropertyLoan
