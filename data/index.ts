import javascript from "../public/icons/javascript.png";
import expessjs from "../public/icons/express-js.png";
import mongodb from "../public/icons/mongodb.png";
import reactNative from "../public/icons/react-native.png";
import tailwindcss from "../public/icons/tailwindcss.png";
import nextjs from "../public/icons/nextjs.png";
import typescript from "../public/icons/typescript.png";
import antdesign from "../public/icons/antd.png";
import rentals from "@/public/rentals.png"

import { fetchSimpleIcons } from "react-icon-cloud";

const titleWords = [
  "Software Engineer",
  "Aspiring Founder",
  "AI enthusiast",
  "Content Creator",
];

const imagesForHero = ["/DavidBaiye.jpg", "/DavidBaiye2.jpg"];

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "/contact" },
];

const projects = [
  {
    title: "Gloryous Decor Rentals website",
    des: "A website for a decor rental company",
    img: rentals,
    url: "https://gloryousdecorentals.vercel.app",
    iconLists: [typescript, tailwindcss, antdesign, nextjs, mongodb, expessjs], // This will be populated later
  },
  {
    title: "ui.aceternity.com",
    des: "A website for UI design",
    url: "https://gloryousdecorentals.vercel.app",
    img: rentals,
    iconLists: [], // This will be populated later
  },
];

export { titleWords, imagesForHero, navItems, projects };
