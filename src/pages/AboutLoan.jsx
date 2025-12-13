import React from "react";
import { useLocation } from "react-router-dom";
import Btn from "../components/Btn";

const AboutLoan = () => {
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

  return (
    <>
      <div className="w-full md:h-screen flex items-center justify-center flex-col md:mt-0 mt-[12vh]  bg-white px-6 sm:px-12 lg:px-24 py-16">
        <div>
          <h1 className="text-3xl  font-[spaceBold] sm:text-4xl font-semibold text-[#1f2a44] mb-6">
            About {loan.name}
          </h1>

          <p className="text-base sm:text-xl font-[spaceRegualar] text-gray-700 leading-relaxed max-w-5xl mb-5">
            {loan.desc1}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mb-5 font-[spaceRegualar]">
            <p className="text-gray-600 leading-relaxed">
              {loan.desc2}
            </p>

            <p className="text-gray-600 leading-relaxed">
              {loan.desc3}
            </p>
          </div>

          <hr className="border-gray-500 max-w-5xl mb-5" />

          <p className="text-gray-600 leading-relaxed max-w-5xl mb-10 font-[spaceRegualar]">
            {loan.end}
          </p>
        </div>
        <div onClick={handleScrollToForm} className="cursor-pointer">
        <Btn value={`Apply for ${loan.name}`} font="spaceBold" />
        </div>
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <div id="form" className="w-full bg-white px-6 sm:px-12 lg:px-24 py-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#1f2a44] mb-4">
            Get a Quote
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
            {
              `Now apply for a ${loan.name} online, All you need to do is provide
            your details below application form.`
            }
          </p>

          <form className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#1f2a44] uppercase">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-[#1f2a44]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#1f2a44] uppercase">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-[#1f2a44]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#1f2a44] uppercase">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-[#1f2a44]"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#232c4f] text-white px-24 py-4 text-sm font-semibold tracking-wide hover:bg-[#1b2342] transition-all"
              >
                SEND INQUIRY
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AboutLoan;
