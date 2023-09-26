import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Rules from "../components/Rules";
import Attributes from "../components/Attributes";
import Faqs from "../components/Faqs";
import Prices from "../components/Prices";
import Partners from "../components/Partners";
import Policy from "../components/Policy";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Rules />
      <Attributes />
      <Faqs />
      <Prices />
      <Partners />
      <Policy />
    </div>
  );
};

export default Homepage;
