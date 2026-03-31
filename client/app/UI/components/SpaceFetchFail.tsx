import React from "react";
import { styles } from "./Button";
import Link from "next/link";
import Nav from "./Navbar";
import Footer from "@/app/(pages)/home/Footer";

const SpaceFetchFail = () => {
  return (
    <section className="uppercase text-center flex flex-col items-center justify-center w-full max-sm:space-y-3 space-y-6 aspect-[16/7] max-md:aspect-[12/7] min-h-[20rem]">
      <p className="text-xs tracking-[0.5rem]">lasbouq</p>
      <div className="">
        <h1 className="max-sm:text-2xl max-md:text-3xl text-4xl text-balance leading-12">
          Spaces(s) not available at the moment. Please contact us below or try
          again later
        </h1>
      </div>
      <Link
        className={`group relative ${styles} bg-[#A37A4B] before:bg-black`}
        href={"/contact"}
      >
        <p
          className={`capitalize relative text-background transition-colors duration-500 group-hover:text-white`}
        >
          Contact us
        </p>
      </Link>
    </section>
  );
};

export default SpaceFetchFail;
