import React from "react";
import faq_svg from "../images/faq_svg.svg";

const Faqs = () => {
  return (
    <section className="  font-monteserat bg-[#150E28] border-solid border-b-[1px] border-white border-opacity-20 pt-28 pb-24">
      <div className=" max-w-7xl mx-auto">
        {/* SECTIONS */}
        <div className=" flex">
          {/* LEFT SECTION */}
          <div>
            {/*FAQ TITLE*/}
            <div>
              <h2 className="text-3xl ">Frequently Ask </h2>
              <h2 className="text-3xl text-[#D434FE]">Question</h2>
              <p>
                We got answers to the questions that you might want to ask about
                getlinked Hackathon 1.0
              </p>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div>
            <img src={faq_svg} alt="" srcset="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
