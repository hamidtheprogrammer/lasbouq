import Link from "next/link";
import { styles } from "@/app/UI/components/Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <section test-id="benefits" className="px-3">
      <aside className="flex justify-center items-center gap-20 max-md:h-[30rem] h-[35rem]">
        <h1 className="font-italiana max-sm:text-2xl max-md:text-3xl text-4xl uppercase max-md:max-w-[19rem] max-w-[25rem] text-balance -translate-y-14">
          One Membership gives you Multiple Experiences
        </h1>
        <div className="flex flex-col max-w-[20rem] space-y-4 translate-y-14">
          <p className="text-sm">
            One membership allows you access to the gym, workspaces, and
            member-only events — no separate sign-ups, no add-ons.
          </p>
          <Link
            className={`size-fit group border border-foreground relative ${styles} before:bg-foreground`}
            href={"/apply"}
          >
            <p
              className={`relative text-foreground transition-colors duration-500 group-hover:text-white`}
            >
              See below
            </p>
          </Link>
        </div>
      </aside>
      <div className="w-full flex md:h-screen max-md:flex-col max-md:mt-10 md:py-20">
        <div className="relative md:h-full max-md:w-full md:w-1/2 flex flex-col justify-between md:px-20 max-md:flex-row max-md:items-center">
          <p className="max-md:order-2 max-sm:text-xs max-w-[12rem] md:self-end text-end">
            Access premium workspaces and fully equipped gyms without juggling
            multiple subscriptions
          </p>
          <h1 className="max-md:order-1 font-italiana uppercase h-fit text-7xl max-md:text-5xl max-sm:text-3xl max-w-[22rem] text-balance">
            Work, train, & recharge
          </h1>
        </div>
          <Image
            className="max-md:size-full max-md:mt-10 flex-1 object-cover"
            src={"/image.png"}
            width={500}
            height={500}
            alt="gym image"
          />
      </div>
      <div className="w-full flex md:h-screen md:py-20 max-md:flex-col max-md:mt-16">
        <div className="relative md:h-full max-md:w-full md:w-1/2 flex flex-col justify-between md:px-16 max-md:flex-row max-md:items-center">
          <p className="max-md:order-2 max-sm:text-xs max-w-[12rem] md:self-end text-end">
            Connect beyond your screen. Members get access to curated talks,
            workshops, and social events designed to spark real connections.
          </p>
          <h1 className="font-italiana uppercase h-fit text-7xl max-md:text-5xl max-sm:text-3xl max-w-[25rem] text-balance">
            Curated Events & Real Community
          </h1>
        </div>
          <Image
            className="max-md:size-full max-md:mt-10 flex-1 object-cover"
            src={"/about-image-2.png"}
            width={500}
            height={500}
            alt="gym image"
          />
      </div>
    </section>
  );
};

export default Benefits;
