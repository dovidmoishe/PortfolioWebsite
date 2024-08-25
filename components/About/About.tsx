import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";
import { FaGithub } from "react-icons/fa6";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "tailwindcss",
  "figma",
  "redux",
  "antdesign",
  "mongodb",
  "appwrite",
  "python"
];

type Props = {};

const About = (props: Props) => {
  return (
    <div className="dark:bg-black">
      <div className="max-w-7xl mx-auto p-8">
      <p className="text-4xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-8">
        About Me
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-center m-5 gap-10 mt-7">
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-lg font-normal leading-relaxed">
            I&apos;m a passionate software engineer and aspiring start-up founder
            driven by the desire to build impactful projects. Inspired by my
            role model, Steve Jobs, I aim to create solutions that can change
            the world.
          </p>
          <p className="text-lg font-normal leading-relaxed">
            With over 4 years of professional experience, I have honed my skills
            in various web technologies, focusing on building real-time
            projects. I also have a deep interest in Machine Learning and AI,
            which I&apos;m exploring further while preparing to study Computer
            Science at the Federal University of Lafia.
          </p>
          <p className="text-lg font-normal leading-relaxed">
            In my free time, I enjoy staying updated with the latest tech trends
            through articles and YouTube videos. My journey in coding began at
            the age of 10, and my passion for technology continues to grow.
          </p>
          <p className="text-sm text-gray-500">
            PS: Hover over any icon in the icon cloud to see its name.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/dovidmoishe"
              className="p-[3px] relative inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-md transition duration-200 transform hover:scale-105" />
              <div className="px-4 py-2 bg-black rounded-lg relative group transition duration-200 text-white hover:bg-transparent hover:border hover:border-indigo-500">
                <div className="flex items-center gap-2">
                  <FaGithub size={35} />
                  <span>GitHub</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
