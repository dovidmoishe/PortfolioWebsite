import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";

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
];

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default Skills;
