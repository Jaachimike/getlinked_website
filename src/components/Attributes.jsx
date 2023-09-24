import React from "react";
import attributes_svg from "../images/attributes_svg.svg";

const Attributes = () => {
  return (
    <section className=" bg-[#150E28] border-solid border-b-[1px] border-white border-opacity-20 pt-20 pb-32">
      <div className=" max-w-7xl mx-auto">
        {/* SECTIONS */}
        <div className=" flex items-center">
          {/* LEFT SECTION */}
          <div className=" w-1/2">
            <img src={attributes_svg} alt="" srcset="" />
          </div>

          {/* RIGHT SECTION */}

          <div className=" w-1/2 flex flex-col items-start ">
            <h2 className=" text-3xl  ">Judging Criteria</h2>
            <h2 className=" mb-5 text-3xl text-[#D434FE]">Key attributes</h2>
            {/* 1st bulletpoint  */}
            <div className=" mb-7">
              <p>
                <span className=" text-[#D434FE]">
                  Innovation and Creativity
                </span>
                : Evaluate the uniqueness and creativity of the solution.
                Consider whether it addresses a real-world problem in a novel
                way or introduces innovative features.
              </p>
            </div>

            {/* 2nd bulletpoint  */}
            <div className=" mb-7">
              <p>
                <span className=" text-[#D434FE]">Functionality</span>: Assess
                how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </p>
            </div>

            {/* 3rd bulletpoint  */}
            <div className=" mb-7">
              <p>
                <span className=" text-[#D434FE]">Impact and Relevance</span>:
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
            </div>

            {/* 4th bulletpoint  */}
            <div className=" mb-7">
              <p>
                <span className=" text-[#D434FE]">Technical Complexity</span>:
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>
            </div>

            {/* 5th bulletpoint  */}
            <div className=" mb-14">
              <p>
                <span className=" text-[#D434FE]">
                  Adherence to Hackathon Rules
                </span>
                : Judges will Ensure that the term adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
            </div>

            {/* READ MORE BUTTONS */}
            <div className=" px-10 py-3 rounded  bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attributes;
