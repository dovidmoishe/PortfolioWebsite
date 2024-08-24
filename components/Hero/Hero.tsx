import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import David from "@/public/DavidBaiye.jpg";
import { FlipWords } from "../ui/flip-words";
import { imagesForHero, titleWords } from "@/data";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex md:gap-28 flex-col md:flex-row md:justify-between">
        {/* Change the text to say "Welcome to our website!" */}
        <div className="flex flex-col gap-3">
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-8">
            David Baiye
          </p>
          <div className="text-2xl font-normal text-neutral-600 dark:text-neutral-400">
            I'm a/an <FlipWords words={titleWords} />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-md">Find me on</p>
            <div className="flex items-center gap-2 text-lg">
              <FaXTwitter size={25} className="cursor-pointer" />
              <FaWhatsapp size={25} className="cursor-pointer" />
              <FaInstagram size={25} className="cursor-pointer" />
            </div>
          </div>
          <div className="w-52 mt-4">
            <button className="p-[3px] relative w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                <div className="flex items-center gap-3">
                  <MdFileDownload className="text-white"/>
                  Download CV
                </div>
              </div>
            </button>
          </div>
        </div>

        <ImagesSlider images={imagesForHero} />
      </div>
    </div>
  );
};
interface ImagesSliderProps {
  images: StaticImageData[];
  interval?: number; // Interval for the image fade transition in milliseconds
}

const ImagesSlider: React.FC<ImagesSliderProps> = ({ images, interval = 6000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  return (
    <div className="relative w-72 h-72">
      {images.map((image, index) => (
        <Image
          key={index}
          alt={`Slide ${index + 1}`}
          src={image}
          width={300}
          height={300}
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};
export default Hero;
