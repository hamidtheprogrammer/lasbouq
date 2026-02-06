import { styles } from "@/app/UI/components/Button";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="text-foreground px-5 py-10 mt-38 max-md:mt-20 md:size-full flex gap-10 max-md:flex-col md:justify-between items-center">
      <div className="flex flex-col h-full flex-1 justify-between max-md:w-full max-md:items-center">
        <Image
          src={"/image.png"}
          width={500}
          height={500}
          alt="image"
          className="w-full max-md:order-2 md:max-w-[15rem]"
        />
        <h1 className="font-italiana max-sm:text-5xl text-7xl md:max-w-80 text-balance max-md:order-1 sm:w-[30rem] max-md:mb-10 max-md:text-center">
          Platey Ipsum vendeur corea
        </h1>
      </div>
      <div className="h-full max-md:hidden md:w-[]">
        <Image
          src={"/about-image-3.png"}
          width={500}
          height={500}
          alt="image"
          className="size-full object-cover flex-1"
        />
      </div>
      <div className="md:h-full flex-1 md:w-1/3 flex flex-col justify-between items-center md:items-end">
        <div className="flex flex-col gap-5 text-balance max-md:items-center max-md:mb-10">
          <p className="md:w-[15rem] pr-8 max-md:text-center max-md:mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            expedita iusto ad in sit assumenda quas, est id molestias facere,
            impedit voluptates, numquam quis! Quasi nam labore fuga molestias
            doloremque.
          </p>
          <Link
            className={`group relative ${styles} bg-[#A37A4B] before:bg-black`}
            href={"/apply"}
          >
            <p className={`relative text-white transition-colors duration-500`}>
              Our Story
            </p>
          </Link>
        </div>
        <div className="w-full max-sm:h-fit max-md:h-80 flex max-sm:flex-col max-md:gap-5 md:flex-row md:justify-end">
          <Image
            src={"/about-image-1.png"}
            width={500}
            height={500}
            alt="image"
            className="md:w-full object-cover sm:w-1/2 max-sm:w-full md:aspect-[10/13] md:max-w-[15rem]"
          />
          <div test-id="about-img-3" className="flex-1 md:hidden">
            <Image
            src={"/about-image-3.png"}
            width={500}
            height={500}
            alt="image"
            className="size-full object-cover"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
