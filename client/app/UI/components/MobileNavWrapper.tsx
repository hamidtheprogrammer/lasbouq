"use client";

import { UIContext } from "@/app/context/UIContext";
import { ReactNode, useContext } from "react";

const MobileNavWrapper = ({children}:{children:ReactNode}) => {
  const { isNavOpen } = useContext(UIContext);
  return (
    <div className={` ${!isNavOpen ? "h-0" : "h-fit"} transition-all duration-500 md:hidden absolute top-full  overflow-hidden inset-0 w-full rounded-b-3xl z-30`}>
      {children}
    </div>
  );
};

export default MobileNavWrapper;
