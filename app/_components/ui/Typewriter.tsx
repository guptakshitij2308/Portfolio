"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterEFfect() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "DSA Enthusiast",
          "Open Source Contributor",
          "Competitive Programmer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}
