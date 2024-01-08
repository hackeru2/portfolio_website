"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="italic">
          {" "}
          Experienced engineer from Ramat Hasharon,
        </span>{" "}
        excels in model integration, code optimization, and real-time system
        management. With a degree from HackerU College, I boast expertise in
        Vue.js, React, Laravel, PHP, SQL, AWS, and more. Currently a Backend
        Developer at PayMe, I lead server-side development, including a recent
        ETL system for pulling data from credit companies. My proficiency
        extends to technologies like phpstorm, Kibana, and Linux terminal CSV
        functions, showcasing my commitment to robust and efficient solutions.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the piano.
      </p>
    </motion.section>
  );
}
