import Link from "next/link";
import { styles } from "@/app/UI/components/Button";

const MembershipCTA = () => {
  return (
    <section className="uppercase text-center flex flex-col items-center justify-center w-full max-sm:space-y-3 space-y-6 aspect-[16/7] max-md:aspect-[12/7] min-h-[20rem]">
      <p className="text-xs tracking-[0.5rem]">lasbouq</p>
      <div className="">
        <h1 className="max-sm:text-4xl max-md:text-5xl text-7xl">
          Spaces Made for{" "}
        </h1>
        <h2 className="max-sm:text-5xl max-md:text-6xl text-8xl font-italiana">
          productivity
        </h2>
      </div>
      <p className="max-sm:text-sm max-w-[25rem]">
        We craft a unique blend of style and functionality, made for working.
      </p>
      <Link
        className={`group relative ${styles} bg-[#A37A4B] before:bg-black`}
        href={"/apply"}
      >
        <p
          className={`capitalize relative text-background transition-colors duration-500 group-hover:text-white`}
        >
          Apply for membership
        </p>
      </Link>
    </section>
  );
};

export default MembershipCTA;
