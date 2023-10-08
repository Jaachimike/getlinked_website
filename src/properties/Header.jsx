import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="  font-monteserat bg-[#150E28] h-[10dvh]  border-solid border-b-[1px] border-white border-opacity-20     ">
      <div className=" max-w-7xl mx-auto flex justify-between  h-full items-center">
        <div>
          {/* LOGO */}
          <Link to="/" className=" text-white text-3xl font-bold">
            <h1>
              {" "}
              get<span className=" text-[#D434FE]">linked</span>
            </h1>
          </Link>
        </div>

        {/* NAV LINKS AND REGISTER BUTTON */}

        <div className=" flex items-center  ">
          {/* NAV LINKS */}
          <nav>
            <ul className=" flex justify-between space-x-9">
              <li>
                <button>Timeline</button>
              </li>
              <li>
                <button>Overview</button>
              </li>
              <li>
                <button>FAQs</button>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* REGISTER BUTTON  */}
          <div className="  px-10 py-3 rounded ml-16 bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
            <button>Register</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
