import Link from "next/link";
import Button from "./Button";
import Navbutton from "./Navbutton";
import UIContextProvider from "@/app/context/UIContext";
import MobileNavWrapper from "./MobileNavWrapper";
import MobileNav from "./MobileNav";

export const navList = [
  { name: "Membership", link: "/membership" },
  { name: "Locations", link: "/locations" },
  { name: "Support", link: "/support" },
];

const Nav = () => {
  return (
    <header className="w-full relative flex justify-between items-center z-10 text-background  h-20 px-5 font-extralight">
      <h1 className="font-italiana font-extrabold text-3xl">LASBOUQ</h1>
      <ul className="flex gap-14 text-[0.85rem] tracking-[0.1rem] max-md:hidden">
        {navList.map((li) => (
          <li>
            <Link href={li.link}>{li.name}</Link>
          </li>
        ))}
      </ul>
      <Button
        className="max-md:hidden"
        type="link"
        name="Apply Today"
        color="background"
        colorHover="black"
        backgroundHover="bf_background"
        border
      />
      <UIContextProvider>
        <Navbutton />
        <hr className="h-[0.05rem] w-full bg-background absolute left-0 bottom-0" />
        <MobileNavWrapper >
          <MobileNav />
        </MobileNavWrapper>
      </UIContextProvider>
    </header>
  );
};

export default Nav;
