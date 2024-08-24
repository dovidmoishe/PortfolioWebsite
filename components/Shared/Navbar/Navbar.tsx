import React from "react";
import { FloatingNav } from "../../ui/floating-navbar";
import { navItems } from "@/data";

type Props = {};

const Navbar = (props: Props) => {
  
  return (
    <>
     <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
    </>
  );
};

export default Navbar;
