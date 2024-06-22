import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./MagicButton";

export default function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40  -left-10 md:-left-32 md:-top-20  h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10  left-full  h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28  left-80  h-[80vh]  w-[50vw]"
          fill="blue"
        />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            level up your front-end skill
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Practice with Real Life Coding Projects"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mt-8 mb-4 text-white-200 text-sm md:text-lg lg:text-xl">
            Coding projects are a great way to practice coding, improve your
            skills and build your portfolio.
          </p>

          <a href="#about">
            <MagicButton title="Show my work" icon="test" position="right" />
          </a>
        </div>
      </div>
    </div>
  );
}
