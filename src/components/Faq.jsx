import React from "react";
import FaqComp from "react-faq-component";

const data = {
  rows: [
    {
      title: "Can I work on a project I started before the hackathon?",
      content: ``,
    },
    {
      title: "What happens if I need help during the hackathon?",
      content: ``,
    },
    {
      title: "What happens if I don't have an idea for a project?",
      content: ``,
    },
    {
      title: "Can I join a team or do I have to come with one?",
      content: ``,
    },
    {
      title: "What happens after the hackathon ends",
      content: ``,
    },
    {
      title: "Can I work on a project I started before the hackathon?",
      content: ``,
    },
  ],
};

const styles = {
  bgColor: "none",
  titleTextColor: "blue",
  rowTitleColor: "white",
  rowContentColor: "#D434FE",
  arrowColor: "#D434FE",
};

const config = {
  // animate: true,
  arrowIcon: "+",
  // tabFocus: true
};

const Faq = () => {
  return (
    <div className="  ">
      <FaqComp data={data} styles={styles} config={config} />
    </div>
  );
};

export default Faq;
