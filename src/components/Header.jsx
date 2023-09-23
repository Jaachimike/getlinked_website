import React from "react";

const Header = () => {
  return (
    <header className=" bg-[#150E28] h-[10dvh]  ">
      <div className=" max-w-7xl mx-auto flex justify-between  h-full items-center">
        <div>
          {/* LOGO */}
          <h1 className=" text-white">
            get<span className=" text-[#D434FE]">linked</span>
          </h1>
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
                <button>Contact</button>
              </li>
            </ul>
          </nav>

          {/* REGISTER BUTTON  */}
          <div className=" px-6 py-1 ml-16 bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
            <button>Register</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
