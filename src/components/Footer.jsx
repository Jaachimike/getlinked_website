import React from "react";

const Footer = () => {
  return (
    <section className=" bg-[#150E28]">
      <div className=" max-w-7xl mx-auto">
        {/* SECTIONS  */}
        <div className=" flex">
          {/* 1ST ROW  */}
          <div className=" flex flex-col space-y-28 ">
            <div>
              <h2 className=" mb-4 text-3xl">
                get <span>linked</span>
              </h2>
              <p>
                Getlinked Tech Hackathon is a technology innovation program{" "}
                <br />
                established by a group of organizations with the aim of
                showcasing <br /> young and talented individuals in the field of
                technology
              </p>
            </div>

            <div className=" flex space-x-5">
              <h2 className=" pr-5 border-r-2">Terms of Use</h2>
              <h2>Privacy Policy</h2>
            </div>
          </div>
          {/* 2ND ROW  */}
          <div>
            <h2 className=" text-xl">Useful Links</h2>
            <ul>
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>

            {/* SOCIAL MEDIA LINKS */}

            <div>
              <h2 className=" text-[#D434FE]">Follow us</h2>
            </div>
          </div>
          {/* 3RD ROW */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
