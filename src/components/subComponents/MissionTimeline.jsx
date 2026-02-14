"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DM_Sans } from "next/font/google";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/lib/data/data";

gsap.registerPlugin(ScrollTrigger);

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const MissionTimeline = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // No-op or clean up local triggers if any were created
  }, []);

  const data = [
    {
      title: "15 Feb - 15 Mar ",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white/80 md:text-sm">
            Registration Opens
          </p>
          <p className="text-xs text-white/60 md:text-sm">
            Sign up starts now! Get ready for an amazing hackathon experience.
          </p>
        </div>
      ),
    },
    // {
    //   title: "Feb 1",
    //   content: (
    //     <div>
    //       <p className="mb-4 text-xs font-normal text-white/80 md:text-sm">
    //         Deadline Extended
    //       </p>
    //       <p className="text-xs text-white/60 md:text-sm">
    //         Last chance to register! Don't miss this opportunity.
    //       </p>
    //     </div>
    //   ),
    // },
    {
      title: "28 Mar",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white/80 md:text-sm">
            Hackathon Begins
          </p>
          <p className="text-xs text-white/60 md:text-sm">
            Coding, innovation, and collaboration starts now!
          </p>
        </div>
      ),
    },
    {
      title: "29 Mar",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white/80 md:text-sm">
            Submissions Due
          </p>
          <p className="text-xs text-white/60 md:text-sm">
            Final demos presented. Show us what you've built!
          </p>
        </div>
      ),
    },
    {
      title: "29 Mar",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white/80 md:text-sm">
            Results & Awards
          </p>
          <p className="text-xs text-white/60 md:text-sm">
            Winners announced! Celebrate the amazing projects and innovations.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-visible"
      suppressHydrationWarning
    >

      <div className="relative z-10">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default MissionTimeline;
