import React from "react";
import Timeline from "../components/Timeline";

const TimelinePage = () => {
  return (
    <section className="  font-monteserat bg-[#150E28] pt-12 pb-32 ">
      <div className=" max-w-7xl mx-auto">
        {/* HEADER */}
        <div className=" text-center mb-11">
          <h2 className=" text-xl font-bold mb-3">Timeline</h2>
          <p>
            Here is the breakdown of the time we anticipate <br /> using for the
            upcoming event.
          </p>
        </div>

        {/* TIMELINE  */}
        <Timeline />
      </div>
    </section>
  );
};

export default TimelinePage;
