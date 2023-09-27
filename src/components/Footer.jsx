import React from "react";
import insta from "../images/footer_images/mdi_instagram.svg";
import twitter from "../images/footer_images/x_logo.svg";
import facebook from "../images/footer_images/fb_logo.svg";
import linkedin from "../images/footer_images/ri_linkedin-fill.svg";
import location from "../images/footer_images/location_svg.svg";
import phone from "../images/footer_images/phone_svg.svg";

const Footer = () => {
  return (
    <section className=" bg-[#150E28] pt-20 pb-14  ">
      <div className=" max-w-7xl mx-auto">
        {/* SECTIONS  */}
        <div className=" flex justify-between mb-14">
          {/* 1ST ROW  */}
          <div className=" flex flex-col space-y-14 ">
            <div>
              <h2 className=" mb-4 text-3xl">
                get<span className="text-[#D434FE]">linked</span>
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
              <h2 className=" pr-5 border-r-2 border-[#D434FE]">
                Terms of Use
              </h2>
              <h2>Privacy Policy</h2>
            </div>
          </div>
          {/* 2ND ROW  */}
          <div className=" flex flex-col space-y-3">
            <h2 className=" text-[#D434FE] ">Useful Links</h2>
            <ul>
              <li className=" mb-3">Overview</li>
              <li className=" mb-3">Timeline</li>
              <li className=" mb-3">FAQs</li>
              <li>Register</li>
            </ul>

            {/* SOCIAL MEDIA LINKS */}

            <div className=" flex space-x-6">
              <h2 className=" text-[#D434FE]">Follow us</h2>
              <img src={insta} alt="" />
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
          {/* 3RD ROW */}
          <div className=" flex flex-col space-y-5">
            <h2 className=" text-[#D434FE]">Contact Us</h2>

            <div className=" flex  space-x-4">
              <img src={phone} alt="" />
              <p>+234 6707653444</p>
            </div>

            <div className=" flex items-start space-x-4">
              <img src={location} alt="" />
              <p>
                27,Alara Street <br /> Yaba 100012 <br /> Lagos State
              </p>
            </div>
          </div>
        </div>

        {/* TRADEMARK  */}
        <div className=" text-center ">
          <p>All rights reserved. &#169; getlinked Ltd.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
