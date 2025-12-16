import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menu , setMenu] = useState(false);
  const LoanData= [
    {
      name: "Personal Loan",
     
    },
    {
      name: "Home Loan",
    
    },
    {
      name: "Loan Against Property",
      
    },
    {
      name: "Business Loan",
      
    },
    {
      name: "Professional Loan",
    
    },
  ]

  return (
    <div className="w-full flex top-0 items-center justify-between px-8 h-[12vh] bg-[#14263E] fixed z-99">

      <div className="font-[spaceBold] text-[#6BD1D3] flex items-center text-2xl md:text-4xl">
        CAPITALVENUE
      </div>

      <div className="hidden md:flex gap-6 items-center realtive" onMouseLeave={() => setMenu(false)}>
        <div
        onMouseEnter={()=> setMenu(true)}
         className={`w-[20vw] top-[60%] h-[15vw] rounded-xl flex flex-col justify-center p-2 gap-2 bg-white absolute ${menu ? "block": "hidden"}`}>
            {LoanData.map((item, i) => (
              <Link 
              to={`/${item.name}`}
              state={{loan: item}}
              key={i} className="text-black p-2 font-[spaceRegualar] hover:text-[#6BD1D3] duration-300">
                {item.name}
              </Link>
            ))}
        </div>
        {["Home", "Loan Products", "Contact us", "About us",].map((item, i) => (
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
      <Link to="/Contact us">
      <button className="bg-[#75DCE3] cursor-pointer md:block hidden text-[1rem] text-black font-[spaceBold] px-8 py-3 rounded-md hover:bg-[#5ac1c7] transition-all duration-300">
        BECOME REFERRAL PARTNER
      </button>
       </Link>

      <div className="md:hidden text-white cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <X size={30} /> : <Menu size={30} />}
      </div>

      {open && (
        <div className="absolute top-[12vh] left-0 w-full bg-[#14263E] flex flex-col items-center gap-6 py-6 md:hidden">
          {["Home", " Loan Products", "Contact us", "About us"].map((item, i) => (
            <Link
            onClick={()=> setOpen(false)} 
             to={item === "Home" ? "/" : `/${item.trim()}`  }
              key={i}
              className="text-white text-lg font-[spaceRegualar] cursor-pointer hover:text-[#6BD1D3] duration-300"
            >
              {item}
            </Link>
          ))}

          <Link to="/Contact us" onClick={()=> setOpen(false)} className="bg-[#75DCE3] text-[1rem] text-black font-[spaceBold] px-10 py-3 rounded-md hover:bg-[#5ac1c7] transition-all uppercase duration-300">
            become referral partner 
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
