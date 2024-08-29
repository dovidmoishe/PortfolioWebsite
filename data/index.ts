import javascript from "../public/icons/javascript.png";
import expessjs from "../public/icons/express-js.png";
import mongodb from "../public/icons/mongodb.png";
import reactNative from "../public/icons/react-native.png";
import tailwindcss from "../public/icons/tailwindcss.png";
import nextjs from "../public/icons/nextjs.png";
import typescript from "../public/icons/typescript.png";
import antdesign from "../public/icons/antd.png";
import rentals from "@/public/rentals.png"
import lamecon from "@/public/lamecon.png"
import nftcollection from "@/public/nft-collection.png"
import solidity from "@/public/icons/solidity.png"
import hardhat from "@/public/icons/hardhat.png"
import noimage from "@/public/noimage.png"
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
    title: "GloryousDecor Rentals website",
    des: "A website for a events decor rental business in Chicago, USA, built based on requirements by client.",
    img: rentals,
    url: "https://gloryousdecorentals.vercel.app",
    iconLists: [typescript, tailwindcss, antdesign, nextjs, mongodb, expessjs], // This will be populated later
  },
  {
    title: "Lamecon website",
    des: "A website for the organization I volunteer at here in Lafia, built by Myself and another developer of the Lamcon TechHub team.",
    url: "https://lamecon.vercel.app",
    img: lamecon,
    iconLists: [typescript,tailwindcss, antdesign, nextjs], // This will be populated later
  },
  {
    title: "NFT Collection",
    des: "A simple react web app for minting of NFTs, I built this project while learning solidity in 2022. Not one of my proudest projects tho😅",
    url: "https://nft-collection-react.netlify.app/",
    img: nftcollection,
    iconLists: [javascript, hardhat, solidity, reactNative]
  },
  {
    title: "A Full-stack todo app by 13-year-old David😂",
    des: "This was a project I built in the early stages of my JavaScript Journey, but as soon as I learned to write server-side development with JavaScript I took it as the first project to add backend functionality to back then in 2022.",
    url: "https://github.com/dovidmoishe/Fullstack-todo-app",
    img: noimage,
    iconLists: [javascript, expessjs, mongodb]
  },
  {
    title: "Challenge App", 
    des: "An app(I only coded the backend tho) where you could share your journey on a specific challenge, for you could join the #100daysofcode challenge and post your progress everyday. Although today I admit that my knowledge of building effiecient applications was very limited back then.",
    url: "https://github.com/dovidmoishe/challenge-app-backend",
    img: noimage,
    iconLists: [javascript, expessjs, mongodb]
  }
];

const workExperience = [
  {
    id: 1,
    title: "Junior Frontend Engineer at isitsafe.io",
    desc: "Assisted in the development of the web-based platform using Next.JS, TypeScript, AntD, This has by-far been the best work experience I've ever had.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Software Engineer",
    desc: "I have built web apps for 4+ clients based on their proposed needs assessment.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Software Engineer at LAMECON",
    desc: "Building solutions for the ambitions of the organisation.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
]

export { titleWords, imagesForHero, navItems, projects, workExperience };
