import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../../data";  // Import the data with icons
import { PinContainer } from "../ui/3d-pin";
import { StaticImageData } from "next/image";
import Image from 'next/image'

interface CardProps {
  image: string;
  name: string;
  description: string;
  icons: StaticImageData[];
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, name, description, icons, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            {icons.map((icon, i) => (
              <Image src={icon} key={i} width={0} height={0} alt="icon" />
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
    <>
    
    </>
  );
};

export default Projects;
