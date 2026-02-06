"use client"
import { UIContext } from "@/app/context/UIContext";
import { useContext } from "react";

const Navbutton = () => {
    const {setIsNavOpen, isNavOpen} = useContext(UIContext)
  return (
    <div data-testid="menu" onClick={()=>setIsNavOpen((prev)=>!prev)} className="relative md:hidden size-8 flex flex-col transition-all duration-500 justify-center items-center hover:gap-0 cursor-pointer group">
      <div className={`absolute h-0.5 w-8 bg-background transition-all duration-500 ${!isNavOpen ? "translate-y-1" : "rotate-135"}`}></div>
      <div className={`absolute h-0.5 w-8 bg-background transition-all duration-500 ${!isNavOpen ? "-translate-y-1" : "-rotate-135"}`}></div>
    </div>
  );
};

export default Navbutton;
