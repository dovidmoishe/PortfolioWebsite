import React from "react";
import { workExperience } from "@/data";
import { Button } from "@/components/ui/moving-border";

const Experience = () => {
  return (
    <div className="py-20 w-full bg-gray-50">
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-gray-700 to-gray-900 pt-8 text-center">
        My Work Experience
      </p>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10  ">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(235,235,235,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-gray-800 border-gray-300 shadow-md"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16 rounded-full"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start mt-3 font-semibold">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
