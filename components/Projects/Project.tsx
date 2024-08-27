import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { projects } from "@/data";
import {useRouter} from 'next/navigation'
import router from "next/router";


interface CardProps {
  image: StaticImageData;
  name: string;
  description: string;
  icons: StaticImageData[];
  url: string;
  onButtonClick: () => void;
}


const Card: React.FC<CardProps> = ({
  image,
  name,
  description,
  icons,
  url,
  onButtonClick,
}) => {
  const router = useRouter()
  return (
    <div className="max-w-sm rounded-lg shadow-md overflow-hidden border border-gray-200 bg-white" id="projects">
      <Image src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-900">{name}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            {icons.map((icon, i) => (
              <Image src={icon} key={i} width={20} height={20} alt="icon" />
            ))}
          </div>
          <button
            onClick={onButtonClick}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Check live site
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className=" p-8">
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-gray-700 to-gray-900 pt-8 text-center">
        My Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-7">
        {projects.map((product) => (
          <Card
            key={product.title}
            name={product.title}
            description={product.des}
            image={product.img}
            icons={product.iconLists}
            onButtonClick={() => router.push(product.url)}
            url=""
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
