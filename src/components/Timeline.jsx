import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// import { createTheme } from "@mui/material/styles";

export default function OppositeContentTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <div>
            <h2 className="font-bold  text-lg text-[#D434FE] ">
              Hackathon Announcement
            </h2>
            <p className=" text-white">
              The getlinked tech hackathon 1.0 is formally announced <br /> to
              the general public and teams begin to get ready to register
            </p>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />

          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="font-bold text-lg text-[#D434FE] ">
            November 18, 2023
          </h2>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <div>
            <h2 className="font-bold text-lg text-[#D434FE] ">
              Teams Registration begins
            </h2>
            <p className=" text-white">
              Interested teams can now show their interest in the <br />{" "}
              getlinked tech hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="font-bold text-lg text-[#D434FE] ">
            November 18, 2023
          </h2>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <div>
            <h2 className=" font-bold text-lg text-[#D434FE] ">
              Teams Registration ends
            </h2>
            <p className=" text-white">
              Interested Participants are no longer Allowed to <br /> register
            </p>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="font-bold text-lg text-[#D434FE] ">
            November 18, 2023
          </h2>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <div>
            <h2 className="font-bold  text-lg text-[#D434FE] ">
              Announcement of the accepted teams and ideas
            </h2>
            <p className=" text-white">
              All teams whom idea has been accepted into getlinked tech <br />
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className=" font-bold text-lg text-[#D434FE] ">
            November 18, 2023
          </h2>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <div>
            <h2 className="font-bold  text-lg text-[#D434FE] ">
              Getlinked Hackathon 1.0 Offically Begins
            </h2>
            <p className=" text-white">
              Accepted teams can now proceed to build their <br />
              ground breaking skill driven solutions
            </p>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="  text-lg text-[#D434FE] font-bold">
            November 18, 2023
          </h2>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <div>
            <h2 className=" text-[#D434FE] font-bold   text-lg">Demo Day</h2>
            <p className=" text-white">
              Teams get the opportunity to pitch their projects to judges.{" "}
              <br /> The winner of the hackathon will also be announced on{" "}
              <br /> this day
            </p>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="  text-lg text-[#D434FE] font-bold ">
            November 18, 2023
          </h2>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
