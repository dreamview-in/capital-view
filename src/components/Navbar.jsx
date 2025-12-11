import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between px-8 h-[12vh] bg-[#14263E] fixed z-99">

      <div className="font-[spaceBold] text-[#6BD1D3] text-3xl md:text-4xl">
        CAPITALVENUE
      </div>

      <div className="hidden md:flex gap-6 items-center">
        {["Home", " Loan Products", "Contact us", "About us"].map((item, i) => (
          <Link
          to={item === "Home" ? "/" : `/${item.trim()}`}
            key={i}
            className="text-white font-[spaceRegualar] cursor-pointer hover:text-[#6BD1D3] duration-300"
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
          {["Home", " Loan Products", "Contact us", "About us"].map((item, i) => (
            <Link
             to={item === "Home" ? "/" : `/${item.trim()}`}
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
