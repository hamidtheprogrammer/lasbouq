import Link from "next/link";
import { styles } from "./Button";
import Navbutton from "./Navbutton";
import UIContextProvider from "@/app/context/UIContext";
import MobileNavWrapper from "./MobileNavWrapper";
import MobileNav from "./MobileNav";

export const navList = [
  { name: "About", link: "/about" },
  { name: "Membership", link: "/membership" },
  { name: "Locations", link: "/spaces/city/1" },
  // { name: "Support", link: "/support" },
];

const Nav = () => {
  return (
    <header className="w-full relative flex justify-between items-center z-10 text-background  h-20 px-5 font-extralight">
      <Link
        href={"/"}
        className="font-italiana font-extrabold text-3xl mix-blend-difference"
      >
        LASBOUQ
      </Link>
      <ul className="flex gap-14 text-[0.85rem] tracking-[0.1rem] max-md:hidden">
        {navList.map((li) => (
          <li key={li.name}>
            <Link href={li.link} className="mix-blend-difference">
              {li.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className={`max-md:hidden h-fit group border border-background relative ${styles} before:bg-background`}
        href={"/membership"}
      >
        <p
          className={`relative text-background transition-colors duration-500 group-hover:text-foreground`}
        >
          Apply today
        </p>
      </Link>
      <UIContextProvider>
        <Navbutton />
        <hr className="h-[0.05rem] w-full bg-background absolute left-0 bottom-0" />
        <MobileNavWrapper>
          <MobileNav />
        </MobileNavWrapper>
      </UIContextProvider>
    </header>
  );
};

export default Nav;
