import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menu , setMenu] = useState(false);
  const LoanData= [
    {
      name: "Personal Loan",
      desc1: "Personal loan is the obvious choice if you need a finance for Personal finance, Medical emergency, Wedding purposes, Abroad travel, Holidays, Child education and for buying consumer durable things.",
      desc2: "The personal loan interest rates vary between 10.15% p.a. and 36% p.a. Depending on the loan amount availed by you, your credit score, and repayment tenure, the interest rate charged on your loan is decided. If you maintain a high credit score and have a good relationship with the bank, then the interest rate on your personal loan can be lowered.",
    },
    {
      name: "Home Loan",
      desc1: "To make your home loan journey a smooth sail, in this article we will help you to know eligibility criteria, rates of interest, process, necessary documents, comparison and transfer for lowest rates.",
      desc2: "A home is one of the biggest investments you will make in your life. And, more than that, it is a dream come true for your family and you. We understand what this means to you and our home loans make it as easy and convenient as possible for you to own a home of your choice. With easy digital processes, quick disbursement, thousands of pre-approved projects and competitive home loan interest rates, our housing loans will make your home buying process a simple and hassle-free affair.",
    },
    {
      name: "Loan Against Property",
      desc1: "Loan Against Property (LAP) or mortgage loan is a type of secured loan offered by banks and Housing Finance Companies (HFCs) against commercial or residential property owned by the borrower. The amount, which is availed by keeping the property as collateral till the loan is fully repaid, can be used by the borrower for various purposes like expanding a business, funding children’s education, meeting medical expenses, and more.",
      desc2: "The maximum loan amount provided under LAP can go up to 70% of the property value. Along with being cost-effective, loans against property are reasonably convenient to avail and repay due to the relatively low mortgage interest rate. ",
    },
    {
      name: "Business Loan",
      desc1: "With small business loans up to Rs. 30 lakh, funding for your small business is now just 24 hours away. Use the funds to invest in infrastructure, expand operations, upgrade to the latest plant and machinery, maintain inventory, or to increase working capital. ",
      desc2: "Withdraw only what you need and repay funds as per your business cash flow at nil prepayment charges. Pay only interest as EMIs, and repay the principal at the end of the tenor. Interest is charged only on the amount withdrawn, helping you to lower your EMIs by up to 45% and helping your cash flow.",
    },
    {
      name: "Professional Loan",
      desc1: "As a professional, you’ve spent years to acquire specialised skills. From various personal financial goals to professional commitments- you have to manage all in a limited time. As a professional, your financial needs are unique. We believes that your loans should be no different. ",
      desc2: "Doctors, chartered accountants and engineers can now get a customised loan for professionals with a high amount and at affordable interest rates.",
    },
  ]

  return (
    <div className="w-full flex items-center justify-between px-8 h-[12vh] bg-[#14263E] fixed z-99">

      <div className="font-[spaceBold] text-[#6BD1D3] text-3xl md:text-4xl">
        CAPITALVENUE
      </div>

      <div className="hidden md:flex gap-6 items-center realtive" onMouseLeave={() => setMenu(false)}>
        <div
        onMouseEnter={()=> setMenu(true)}
         className={`w-[20vw] top-[60%] h-[15vw] rounded-xl flex flex-col justify-center p-2 gap-2 bg-white absolute ${menu ? "block": "hidden"}`}>
            {LoanData.map((item, i) => (
              <Link 
              to={`/loan`}
              state={{loan: item}}
              key={i} className="text-black p-2 font-[spaceRegualar] hover:text-[#6BD1D3] duration-300">
                {item.name}
              </Link>
            ))}
        </div>
        {["Home", "Loan Products", "Contact us", "About us","Become Referral Partner"].map((item, i) => (
          <Link
          to={item === "Home" || item === "Loan Products" ? "/" : `/${item.trim()}`}
            key={i}
            className="text-white font-[spaceRegualar] relative cursor-pointer hover:text-[#6BD1D3] duration-300"
            onMouseEnter={() => item === "Loan Products" && setMenu(true)}
          >
            {item}
          </Link>
        ))}

      </div>
      <Link to="/form">
      <button className="bg-[#75DCE3] cursor-pointer md:block hidden text-[1rem] text-black font-[spaceBold] px-8 py-3 rounded-md hover:bg-[#5ac1c7] transition-all uppercase duration-300">
        Contact Us
      </button>
       </Link>

      <div className="md:hidden text-white cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <X size={30} /> : <Menu size={30} />}
      </div>

      {open && (
        <div className="absolute top-[12vh] left-0 w-full bg-[#14263E] flex flex-col items-center gap-6 py-6 md:hidden">
          {["Home", " Loan Products", "Contact us", "About us","Become Referral Partner"].map((item, i) => (
            <Link
             to={item === "Home" ? "/" : `/${item.trim()}` }
              key={i}
              className="text-white text-lg font-[spaceRegualar] cursor-pointer hover:text-[#6BD1D3] duration-300"
            >
              {item}
            </Link>
          ))}

          <button className="bg-[#75DCE3] text-[1rem] text-black font-[spaceBold] px-10 py-3 rounded-md hover:bg-[#5ac1c7] transition-all uppercase duration-300">
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
