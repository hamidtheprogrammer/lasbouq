import { navList } from "@/app/UI/components/Navbar";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="md:mt-10 w-full bg-foreground text-background flex flex-col gap-10 justify-center items-center aspect-[16/4] max-md:aspect-[12/5] min-h-[20rem]">
      <div className="uppercase flex items-center max-xs:gap-3 gap-7 text-7xl max-md:text-6xl max-sm:text-5xl max-xs:text-4xl">
        <h1 className="">Lasbouq </h1>
        <h1 className="font-italiana">Spaces </h1>
      </div>
      <ul className="flex max-sm:flex-col max-sm:text-center gap-4 sm:gap-14 text-[0.85rem] tracking-[0.1rem]">
        {navList.map((li) => (
          <li key={li.name}>
            <Link href={li.link}>{li.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Footer;
