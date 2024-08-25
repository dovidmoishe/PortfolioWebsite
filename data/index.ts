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
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

let icons:any = [];

// const loadIcons = async () => {
//   const iconList = ["mongodb", "react", "tailwindcss"];
//   icons = await Promise.all(iconList.map((icon) => fetchSimpleIcons([{slugs: iconList}])));
// };

const projects = [
  {
    title: "Gloryous Decor Rentals website",
    des: "A website for a decor rental company",
    img: "/gloryous.png",
    iconLists: [], // This will be populated later
  },
  {
    title: "ui.aceternity.com",
    des: "A website for UI design",
    img: "/ui.png",
    iconLists: [], // This will be populated later
  },
];

// Load icons when the file is imported
// loadIcons().then(() => {
//   projects.forEach((project, index) => {
//     project.iconLists = icons; // Assign icons to projects
//   });
// });

export { titleWords, imagesForHero, navItems, projects };
