import Image from "next/image";
import Nav from "@/app/UI/components/Navbar";
import Link from "next/link";
import { styles } from "@/app/UI/components/Button";

const Hero = () => {
  return (
    <section className="size-full relative flex flex-col">
      <Nav />
      <Image
        id="hero"
        className="size-full object-cover absolute"
        fill
        alt="background image"
        loading="eager"
        fetchPriority="high"
        src={"/hero.png"}
      />
      <div className="size-full absolute bg-black/65 inset-0"></div>
      <div className="relative text-background w-full flex-1 p-5">
        <aside className="absolute max-sm:hidden right-5 w-[20rem] flex flex-col gap-4 max-md:top-10">
          <p className="max-md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem esse
            veniam totam libero temporibus consectetur facilis quisquam iure
            fuga ad reiciendis quis ullam, voluptas eaque neque animi
            asperiores. Ea, cumque.
          </p>
          <Link
            className={`group broder group relative ${styles} bg-[#A37A4B] before:bg-background`}
            href={"/apply"}
          >
            <p
              className={`relative text-white transition-colors duration-500 group-hover:text-black`}
            >
              Apply for membership
            </p>
          </Link>
        </aside>
        <div className="max-sm:text-center max-sm:size-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center sm:absolute sm:bottom-5 font-italiana font-bold capitalize md:w-[58rem]">
          <p className="text-xs tracking-[0.5rem] max-xs:tracking-[0.3rem]">
            For businesses and individuals
          </p>
          <h1 className="max-xs:text-5xl max-xs:w-[20rem] max-md:text-[6.5rem] max-sm:text-6xl max-sm:w-[30rem] max-sm:leading-[4rem] max-md:leading-[7rem] text-[8.8rem] leading-[8.5rem] sm:text-balance">
            Home of creative minds
          </h1>
          <Link
            className={`sm:hidden max-md:mt-7 group relative ${styles} bg-[#A37A4B] before:bg-background`}
            href={"/apply"}
          >
            <p
              className={`relative text-white transition-colors duration-500 group-hover:text-black`}
            >
              Apply for membership
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
