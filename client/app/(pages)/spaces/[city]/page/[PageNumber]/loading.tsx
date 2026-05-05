import MembershipCTA from "@/app/(pages)/home/MembershipCTA";
import Footer from "@/app/(pages)/home/Footer";
import Nav from "@/app/UI/components/Navbar";
import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <div className="bg-foreground m-3 mb-10 rounded-lg">
        <Nav />
      </div>
      <section className="w-full flex gap-5 p-3 max-md:flex-col">
        <Image
          width={400}
          height={400}
          loading="eager"
          fetchPriority="high"
          alt="image"
          src={"/about-image-1.png"}
          className="md:sticky md:self-start md:top-3 rounded-lg object-cover md:w-1/3 md:h-[calc(100dvh-1.75rem)] max-md:w-full h-70"
        />
        <div className="flex-1">
          <section className="uppercase text-center flex flex-col items-center justify-center w-full max-sm:space-y-3 space-y-6 aspect-[16/7] max-md:aspect-[12/6] min-h-[20rem]">
            <p className="text-xs tracking-[0.5rem]">lasbouq</p>
            <div className="">
              <h1 className="max-sm:text-4xl max-md:text-5xl text-7xl">
                Our member
              </h1>
              <h2 className="max-sm:text-5xl max-md:text-6xl text-8xl font-italiana">
                Locations
              </h2>
            </div>
            <p className="max-sm:text-sm max-w-[25rem]">
              We craft a unique blend of style and functionality, made for
              working.
            </p>
          </section>
          <ul className="max-xs:space-y-10">
            {Array.from({ length: 6 }).map((space: any, idx: number) => (
              <li
                key={idx}
                className="border-t border-black/20 xs:h-48 py-3"
              >
                <div className="size-full flex max-xs:flex-col max-xs:gap-8 gap-4">
                  <div className="max-xs:h-70 max-xs:w-full aspect-video max-sm:w-1/3  rounded-sm overflow-hidden ">
                    <Image
                      src={"/icon.png"}
                      width={300}
                      height={300}
                      alt="image"
                      loading="eager"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between text-foreground">
                    <div>
                      <h1 className="font-semibold text-xl">{"Loading..."}</h1>
                      <p className="text-sm">
                        Loading...
                      </p>
                    </div>
                    <div className="text-sm">{"Loading..."}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <MembershipCTA />
      <Footer />
    </div>
  );
};

export default Loading;
