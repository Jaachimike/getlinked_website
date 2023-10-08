import React from "react";
import Hero from "../properties/Hero";
import Introduction from "../properties/Introduction";
import Rules from "../properties/Rules";
import Attributes from "../properties/Attributes";
import Faqs from "../properties/Faqs";
import Prices from "../properties/Prices";
import Partners from "../properties/Partners";
import Policy from "../properties/Policy";

import TimelinePage from "../properties/TimelinePage";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Rules />
      <Attributes />
      <Faqs />
      <TimelinePage />
      <Prices />
      <Partners />
      <Policy />
    </div>
  );
};

export default Homepage;
