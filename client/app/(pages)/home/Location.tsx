import { styles } from "@/app/UI/components/Button";
import Image from "next/image";
import Link from "next/link";

const Location = () => {
  return (
    <>
      <section className="px-5 mt-34 max-sm:mt-20">
        <div className="mb-12 text-foreground flex max-md:flex-col justify-between items-center space-y-6">
          <div className="max-md:text-center space-y-1">
            <p className="text-xs tracking-[0.3rem]">OUR LOCATIONS</p>
            <h1 className="font-italiana text-6xl max-sm:text-4xl md:max-w-[30rem] text-balance">
              Platey Ipsum vendeur corea
            </h1>
          </div>
          <Link
            className={`h-fit group border border-foreground hover:border-none relative ${styles} before:bg-foreground`}
            href={"/apply"}
          >
            <p
              className={`relative text-foreground transition-colors duration-500 group-hover:text-white`}
            >
              View our locations
            </p>
          </Link>
        </div>
        <ul className="flex flex-wrap gap-5 max-sm:gap-14">
          {Array.from({ length: 3 }).map((_, idx) => (
            <li
              key={idx}
              className="sm:flex-1 max-sm:space-y-4 space-y-8 max-sm:w-full"
            >
              <Image
                src={"/image.png"}
                width={400}
                height={400}
                alt="location-image"
                className="w-full aspect-square"
              />
              <div className="space-y-2">
                <h1 className="font-semibold text-xl">Peter Taylor house</h1>
                <p className="text-sm opacity-70">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi pariatur ad, soluta odit cum quam itaque dolorum
                  dolorem
                </p>
              </div>
              <Link className="text-sm hover:scale-130" href={"/"}>
                View ⇒
              </Link>
            </li>
          ))}
          ß
        </ul>
      </section>
      <section className="relative h-full before:content-[''] before:relative before:z-10 before:h-20 before:w-full before:rounded-b-2xl before:bg-background">
        <Image
          className="absolute inset-0 w-full object-cover"
          src={"/hero.png"}
          alt="image"
          width={1000}
          height={1000}
        />
      </section>
    </>
  );
};

export default Location;
