import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Rules from "../components/Rules";
import Attributes from "../components/Attributes";
import Faqs from "../components/Faqs";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Rules />
      <Attributes />
      <Faqs />
    </div>
  );
};

export default Homepage;
